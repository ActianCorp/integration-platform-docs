---
title: Using DataConnect with Docker
---

# Using the DataConnect Engine with a Docker Container

This documentation provides step-by-step instructions to set up and use the Actian Dataconnect Engine alongside other containers, using three different approaches: manual setup, using a Dockerfile, and using Docker Compose.

:::note
In order to use the Actian Dataconnect Engine Docker image, you must read and accept the [Actian End User License Agreement (EULA)](#end-user-license-agreement-eula), which is included below. By setting the environment variable  `ACCEPT_ACTIAN_EULA=Y` as described in the following procedures, you acknowledge that you have read and understood this agreement and hereby agree to be bound by the terms and conditions of this agreement.
:::

## Manual Setup

### Step 1: Create a Docker Volume

The shared volume will be used by both the DataConnect engine and the target container.

```
docker volume create engine_data
```

### Step 2: Run the DataConnect Engine

Start the Dataconnect engine container with the created volume. It will extract the engine-related files/folder on the shared volume. 

```
docker run --user root -e ACCEPT_ACTIAN_EULA=Y --entrypoint /script.sh -v engine_data:/opt/Actian/engine actian/dataconnect-engine:12.4.0-36
```

### Step 3: Change Ownership of the Volume

If your target container runs with a specific UID and GID, update the volume ownership.

In this example, the container runs with UID 1000 and GID 1000. Update these values as needed for your target container.

```
docker run --rm -v engine_data:/opt/Actian/engine busybox chown -R 1000:1000 /opt/Actian/engine
```

### Step 4: Start the Target Container

Run your target container and mount the shared volume, `cosmos.ini`, and `cosmos.slc`:

```
docker run --user 1000:1000 -d -v engine_data:/opt/Actian/engine -v C:\Users\someuser\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc -v C:\Users\someuser\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini debian:bullseye-slim bash -c "tail -f /dev/null"
```

### Step 5: Set the Environment Variable

Access the container and execute the following commands:

```
export PATH="/opt/Actian/engine/runtime/di9:${PATH}"
export LD_LIBRARY_PATH="/opt/Actian/engine/runtime/di9:${LD_LIBRARY_PATH}"
export DJLIB="/opt/Actian/config"
```

**Note**: Once the container is started, check the engine version using `djengine -V`. Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual application command as needed.
* Always ensure correct UID:GID matching between the engine volume and target containers.

## Using a Dockerfile

```
FROM actian/dataconnect-engine:12.4.0-36 AS builder
FROM debian:bullseye-slim AS runtime
# Install minimal dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    curl \
    unzip \
    file \
 && rm -rf /var/lib/apt/lists/*
RUN groupadd -r test --gid 1000 && \
    useradd -m -r -u 1000 -g test -s /bin/bash test
RUN mkdir -p /opt/Actian/engine && \
    chown -R test:test /opt/Actian/engine
COPY --from=builder /tmp/actian/engine /tmp/actian/engine
COPY --from=builder /script.sh /script.sh
# Set permissions and make script executable
RUN chmod +x /script.sh && chown test:test /script.sh
# Set environment variables
ENV PATH="/opt/Actian/engine/runtime/di9:${PATH}" \
    LD_LIBRARY_PATH="/opt/Actian/engine/runtime/di9:${LD_LIBRARY_PATH}" \
    DJLIB="/opt/Actian/config"
WORKDIR /
USER test:test
ENTRYPOINT ["/bin/bash", "-c", "\
    /script.sh && \
    djengine -V && \
    echo 'Custom container started.' && \
    tail -f /dev/null"]
```

Build the image by running the following command in the same directory where the Dockerfile exists:

```
docker build -t custom-app .
```

Start the container using the following command:

```
docker run -e "ACCEPT_ACTIAN_EULA=Y" -v C:\Users\someuser\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc -v C:\Users\someuser\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini custom-app
```

**Note**: Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual app command as needed.


## Using Docker Compose

Instead of running the above commands manually, you can use the `docker-compose.yaml` file to set up dataconnect-engine and your target container together. 

Example:

**docker-compose.yaml**

```
services:
  dc-engine:
    image: actian/dataconnect-engine:12.4.0-36
    container_name: dataconnect-engine
    command: ["sh","-c","/script.sh && chown -R 1000:1000 /opt/Actian/engine"]
    user: "root"
    environment:
      - ACCEPT_ACTIAN_EULA=Y
    volumes:
      - engine_data:/opt/Actian/engine
    restart: "no"
  custom-app:
    image: debian:bullseye-slim
    container_name: custom-app
    ports:
      - "8080:8080"
      - "9990:9990"
    depends_on:
      dc-engine:
        condition: service_completed_successfully
    user: "1000:1000"
    volumes:
      - engine_data:/opt/Actian/engine
      - C:\Users\someuser\Desktop\data\cosmos.ini:/opt/Actian/config/cosmos.ini
      - C:\Users\someuser\Desktop\data\cosmos.slc:/opt/Actian/license/cosmos.slc      
    environment:
      - JAVA_OPTS=-Djboss.bind.address=0.0.0.0
      - LD_LIBRARY_PATH=/opt/Actian/engine/runtime/di9:$LD_LIBRARY_PATH
      - DJLIB=/opt/Actian/config
      - PATH=/opt/Actian/engine/runtime/di9:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
    restart: unless-stopped
    command: ["sh","-c","djengine -V && tail -f /dev/null"]
volumes:
  engine_data:
    name: engine_data
```

Start the container using the following command:

```
docker compose up -d
```

**Note**: Both `cosmos.slc` and `cosmos.ini` **must be mounted**:

* `/opt/Actian/license/cosmos.slc`
* `/opt/Actian/config/cosmos.ini`
* The container is kept alive using `tail -f /dev/null`. Replace this with your actual application command as needed.
* Always ensure correct UID:GID matching between the engine volume and target containers.

## End User License Agreement (EULA)

```
ACTIAN CORPORATION
CUSTOMER LICENSE AND SUPPORT SERVICES AGREEMENT

PLEASE READ THIS AGREEMENT CAREFULLY BEFORE DOWNLOADING
OR INSTALLING THE SOFTWARE.

This Customer License and Support Services Agreement
("Agreement") is a legal agreement between the end user
downloading or installing the software ("you") and
Actian Corporation, with its principal place of business
located at 710 Hesters Crossing Road, Suite 250, Round Rock,
TX 78681 ("Us," "Our," or "We").  IF YOU ARE ENTERING
INTO THIS AGREEMENT ON BEHALF OF A COMPANY OR AN
ENTITY, YOU REPRESENT THAT YOU ARE THE EMPLOYEE OR
AGENT OF SUCH COMPANY OR ENTITY AND YOU HAVE THE
AUTHORITY TO ENTER INTO THIS AGREEMENT AND LEGALLY
BIND YOUR COMPANY OR ENTITY. For purposes of this
Agreement, "You" or "Your" includes you and any of
your companies or entities that you have bound under
this Agreement. BY DOWNLOADING, INSTALLING OR USING
THE SOFTWARE OR BY CLICKING THE "I ACCEPT" BUTTON BELOW
(OR TYPING "Y" OR "YES" IF YOU ARE INSTEAD ASKED FOR A
"Y OR N" RESPONSE), YOU ARE AGREEING TO BE BOUND BY
THIS AGREEMENT.  IF YOU DO NOT ACCEPT THE TERMS OF THIS
AGREEMENT, THEN YOU MUST CLICK ON THE "DECLINE" OR
"I DO NOT ACCEPT" BUTTON BELOW (OR TYPE "N" OR "NO" IF
YOU ARE INSTEAD ASKED FOR A "Y OR N" RESPONSE) AND YOU
MAY NOT DOWNLOAD, INSTALL OR USE THE SOFTWARE.  This
Agreement governs the purchase and use of the software
and services described in an Order (defined below). The
"Effective Date" shall be deemed the date you click on
the "Accept" button below.

1.    DEFINITIONS.

1.1   "Documentation" means the user documentation
supplied by Us with the Product.

1.2   "Customer Subsidiaries" means those
companies which are Your wholly-owned subsidiary
on the Effective Date of this Agreement.
Wholly-owned subsidiary shall be defined as an entity
in which You own a 100% shareholding.

1.3   "Order" means a document typically titled
"Order Confirmation" or "Software and Support Services Order," executed by the parties,
that refers to this Agreement and describes in greater
detail Your order-specific information and use
restrictions including, but not limited to: Your billing
information, lists of Products and Support Services ordered, permitted number
of cores with which the Products can be used, and
pricing. Such Order(s) is (are) hereby incorporated into
this Agreement by reference.

1.4   "Outsourcer" means a third party engaged by You
for internal data processing, consulting, product
customization, or internal information management.

1.5   "Products" means the machine-readable object
code of the software programs specified in an Order,
together with any Documentation and Updates thereto.

1.6   "Subscription Term" means one year from the
date of the applicable Order or as otherwise specified
in the Order or an addendum to this Agreement.

1.7   "Support Services" means Product support services.

1.8   "Updates" means any update, release, or
enhancement that is provided to You at Our discretion
under Support Services.

1.9   "Warranty Period" means thirty (30) days from the
date of initial delivery to You of the applicable
Product (excluding Updates).

2.    LICENSE.

2.1   License Grant.  Provided that You comply with
the terms and conditions of this Agreement,
including, but not limited to the conditions stated
in Sections 2.2(i) - 2.2(iv), We grant You a
limited, non-exclusive, non-sublicensable and non-transferable license
to use the Products for Your business purposes during
the Subscription Term in accordance with the terms
and conditions of this Agreement with any restrictions stated
in an Order or attachment hereto, such as the number of copies
of the Products made or used by You, installed on Your
workstations or servers, or on the number of Your users or
the number of seats, sockets or cores accessing or using the
Product. For the avoidance of doubt, You have no right or license under this
Agreement to any use, copy, instance or version of a
Product or other software program, or support services
for a particular Product, unless such use, copy,
instance or version and such support services are covered
in a then-current Order or attachment thereto. You must ensure that any limits
on the number of cores/CPUs are not exceeded by platform
virtualization or other means. Customer Subsidiaries may
place Order(s) under this Agreement, provided that such
Order(s) reference this Agreement, and shall have the
benefit of the Support Services as may be described in
such Order(s), provided that:

i)  You will ensure that each of such Customer
Subsidiaries is aware of and complies with
the terms of this Agreement as though such Customer
Subsidiaries were You, and You are liable
and responsible for their acts and omissions; and

ii)  You will indemnify Us and keep Us fully and
effectively indemnified against all costs, claims,
demands, expenses and liabilities of whatsoever
nature which We may sustain as a result of a
failure by any Customer Subsidiaries to comply with
the terms of this Agreement.

2.2   Product Use Rights.  The license granted in
Section 2.1, above, is subject to the following
conditions:

i) License Restrictions.  Except as expressly
permitted by this Agreement, You may not:
(i) distribute, lease, loan, sell, encumber,
sublicense, or otherwise transfer a Product;
(ii) permit third-party access to or use of the
Products, or use, access, or allow access to the
Products in any way to benefit third parties,
including, but not limited to operating the Products
in a service bureau, SaaS, ASP, or other similar
hosted environment; (iii) use a Product to provide
or operate hosting or Application Service Provider
(ASP) services, Software as a Service, service bureau,
marketing, training, outsourcing
services, or consulting services, or any other
commercial service related to the Products;
(iv) use a Product to develop a product which is
competitive with any of the software programs
manufactured and/or marketed by Us; (v) use a
Product in the same production environment in
which You deploy an open source version of the
Product; vi) use the Products beyond the scope
or term of any license; or (vii) use the Product to
process data for third parties (e.g., data performing
data migrations, conversions, or transformations for
Your customers).  Actian Vector (formerly Vectorwise)
cannot be used as a transactional database. You shall
notify Us if You become aware of any unauthorized third
party access to, or use of, a Product.

ii) Outsourcers.  You may permit access to, and use
of, the Products by an Outsourcer, provided that:
(i) the Outsourcer agrees to comply with the terms
of this Agreement and to access and use the Products
solely for purposes of rendering services to You; and
(ii) the total number of licenses used by You and
Outsourcer must not exceed the scope or number of licenses
purchased.  You shall be responsible and liable for
Outsourcer's compliance with the terms of this
Agreement.  Upon completion of Your services by
Outsourcer, You shall, upon Our request, certify in
writing that Outsourcer has un-installed and destroyed
all copies of Products within thirty (30) days of such
completion of services, and You will give Us any
reasonable assistance We may request to ensure
Outsourcer complies with this clause.

iii) Duplication of Product.  You may make Product
copies equal to the number of licensed copies
expressly authorized under this Agreement plus a
reasonable number of archival copies for inactive
backup purposes, provided that all Product copyright,
trademark, patent, and related proprietary notices
incorporated in or affixed to the Product shall be
duplicated by You on all copies or extracts thereof
and shall not be altered, removed, or obliterated.
Except as required to be permitted by applicable law,
reverse compiling (including reverse compiling to
ensure interoperability), reverse engineering and
other source code derivation of the Product is
prohibited. If You wish to exercise any right to
reverse engineer to ensure interoperability in
accordance with applicable law, You shall first
provide written notice to Us and permit Us, at Our
discretion, to make an offer to provide information
and assistance reasonably required to ensure Product
interoperability with Your other products for a fee
to be mutually agreed upon (if any).

iv) Product Ownership and Restrictions.  The copies
of Products provided hereunder are licensed, not sold,
and all intellectual property rights and title to the
Products shall remain with Us and Our suppliers
and no interest or ownership therein is conveyed to
You.  No right to create a copyrightable work, whether
joint or unitary, is granted or implied; this includes
works that modify (even for purposes of error
correction), adapt, or translate the Product or create
derivative works, compilations, or collective works
therefrom, except as necessary to configure the Product
using the menus, options and tools provided for such
purposes and contained in the Product. You shall not
attempt to circumvent any user limits or other license,
timing or use restrictions that are built in to the
Products. Certain items of software code provided along
with the Products are subject to "open source" licenses
("Third Party Code") provided with the Products.  The
Third Party Code is not subject to the terms and conditions
of this Agreement, except for Sections 5 and 6 of this
Agreement.  Nothing in this Agreement limits Customer's
rights under, or grants Customer rights that supersede
the terms and conditions of any applicable license for
the Third Party Code, including any rights to copy, modify
or distribute Third Party Code under the applicable license.
You are hereby notified that the Products may contain
time-out devices, counter devices, and/or other devices
intended to ensure the limits of a particular license will
not be exceeded ("Limiting Devices").  If the Products do
contain Limiting Devices, We shall ensure that You receive
any keys or other materials necessary to use the Products
to the limits of Your license.

2.3   Product Export. Any person or entity exporting
or re-exporting Products or services directly or
indirectly and via any means, including electronic
transfer, is wholly responsible for doing so in
accordance with the U.S. Export Administration
Regulations and the laws of host countries and You
agree to comply strictly with all such laws and
regulations. We assume no responsibility or liability
for Your failure to obtain any necessary export
approvals. Specifically, no Product or services may be
exported to embargoed or otherwise restricted countries
or end-users.  This provision shall survive the
expiration or earlier termination of this Agreement.

3.    SUPPORT AND ADDITIONAL SERVICES.

3.1   Support Services. The details of the Support
Services can be found at http://supportservices.actian.com/support-services/support#policy.
We may suspend or terminate Support Services for all
Product(s) in the event that You do not pay fees
for Support Services when due.  If You purchase
Support Services for a Product, then You shall
purchase Support Services for all licenses and
copies of such Product. You may not use or access
support services (i) for a software product not covered
in a then-current Order, or (ii) for a Product not
covered by a then-current paid Actian support plan.
You may not use or access support services for the
benefit of a third party, or provide access to or
permit use of support services by a third party.

3.2   Additional Services.  Consulting services or
training may be obtained by You on an as-available
basis and at mutually agreed rates in accordance
with a separate agreement.  Should We agree to
provide consulting services, the payment of the
Product license and Support Services fees under this
Agreement shall not be contingent under any
circumstances upon the performance of any such
services including installation and implementation
services.

4.    FEES; TAXES; PAYMENT TERMS; PURCHASE ORDERS;
SHIPPING.

4.1   Fees.  Fees or other charges shall be as
specified in an Order. All amounts payable under
this Agreement shall be payable in advance, and shall
be non-refundable and not subject to set off or
deduction by You. In the event that You wish to renew
the subscription of a Product, the applicable price
shall be that stated within the then-current Actian
price list, unless otherwise agreed between the
parties.

4.2   Taxes.  Our fees are exclusive of, and You are
responsible for, duties and taxes (other than taxes on
Our income).

4.3   Invoicing and Payment.  All payments of fees and
charges under this Agreement shall be made in U.S.
dollars within thirty (30) days of the date of the
applicable invoice sent to You by Us.  Any amount
payable by You to Us hereunder which is past due may
be subject to a late payment charge equal to one
and a half percent (1.5%) per month, or the highest rate permitted
by law, whichever is less.  The receipt or request for
payment of such amounts shall not prejudice Our rights
with respect to Your failure to pay on the due date.

4.4   Orders and Shipping.  We have no obligation to
accept Purchase Orders, including without limitation
Purchase Orders for renewal of Support Services.
Any fulfillment of Purchase Orders shall be solely
in accordance with the terms of this Agreement and
We expressly reject any conflicting terms and
conditions in Your Purchase Order. Products and
Documentation are shipped FOB origin, Our site.
Delivery will be by electronic or physical means,
at Our election, and all Products shall be deemed
accepted by You immediately upon the earlier of
download or receipt from Us.

5.    LIMITED WARRANTIES.

5.1   We warrant that, during the Warranty Period,
the Products (excluding Updates) will operate
substantially in conformity with the applicable
Documentation. Updates are not included within the
definition of Products for the purposes of any
Warranty or Warranty Period.

5.2   Within the Warranty Period, if You detect a
defect in a Product's physical media, You may return
the defective media to Us and We will replace it
free of charge.

5.3   Provided that We are notified in writing of a
Product's non-conformance with the warranty set forth
in section 5.1 within the applicable Warranty Period,
We shall, at Our option: a) repair or replace the
defective Product, or b) refund the license fees paid
for the Product in exchange for a return of the
defective Product. In the event of a refund Your
license to use the Product will immediately expire.
This Section 5.3 is Your exclusive remedy for breach
of the limited warranty in Section 5.1.  The above
warranties specifically exclude defects resulting
from accident, abuse, misapplication or unauthorized
repair, modifications, enhancements and installation
in an incompatible environment.  We do not warrant
that use of the Products will be uninterrupted or
error free.

5.4   EXCEPT FOR EXPRESS WARRANTIES STATED IN THIS
SECTION 5 AND TO THE MAXIMUM EXTENT PERMITTED BY LAW,
THE PRODUCTS AND SERVICES ARE PROVIDED "AS IS," AND
WE, AND OUR SUPPLIERS DISCLAIM ALL OTHER WARRANTIES
AND CONDITIONS, WHETHER EXPRESS OR IMPLIED OR
STATUTORY, INCLUDING WITHOUT LIMITATION, ANY IMPLIED
WARRANTY (I) OF MERCHANTABILITY OR SUITABILITY,
(II) OF FITNESS FOR A PARTICULAR PURPOSE, OR
(III) OF NON-INFRINGEMENT OF THIRD PARTY RIGHTS.

6.    LIMITATION OF LIABILITY.

To the maximum extent permitted by applicable law, in
no event will We or Our Suppliers be liable to You or
any third party for any indirect, special, incidental,
consequential or punitive damages arising out of or
related to this Agreement, including without
limitation, any lost profits or revenues, loss or
inaccuracy of any data, or cost of substitute goods,
regardless of the theory of liability (including
negligence) and even if We have been advised of the
possibility of such damages. We and Our suppliers'
aggregate liability to You or any third party for
any cause whatsoever shall not exceed the total
fees paid by You to Us under this Agreement during
the 12 months preceding the date that the claim arose.
In no event shall You raise any claim under this
Agreement more than 2 years after (i) the discovery
of the circumstances giving rise to such claim; or
(ii) the effective date of the termination of this
Agreement. The limitations in this Section shall apply
even if any remedy fails of its essential purpose.
Nothing in this Agreement shall exclude or limit
either party's liability for death or personal injury
caused by that party's negligent act or omission or by
wilful default.

7.    THIRD PARTY CLAIMS.

7.1   We shall: (i) defend, or at Our option settle,
any legal proceeding brought against You to the extent
that it is based on a claim that a Product infringes a
third-party patent, trademark or copyright of the
country in which You take delivery of the
Product; and (ii) pay all damages and costs
finally awarded against You by a court of competent
jurisdiction to the extent attributable to such a
claim or agreed to by way of a settlement entered
into by Us, provided that: You (i) notify Us promptly
of each such claim; (ii) give Us sole control of the
defense and/or settlement of the claim; (iii) fully
cooperate with Us in the defense or settlement of the
claim; (iv) mitigate such damages and costs as far as
is reasonably possible; and (v) take no action that
may prejudice Our ability to defend the claim.

7.2   If all or any part of the Product is, or in
Our opinion is likely to become, the subject of a
claim of infringement, We may at Our sole discretion:
(i) procure for You the right to use the Product or
the affected part thereof; (ii) replace the Product
or affected part with other software that has the
same or additional functionality; (iii) modify the
Product or affected part to make it non-infringing;
or (iv) if none of the foregoing remedies is
commercially feasible as determined by Us in Our sole
discretion, terminate your license to the Product and
upon return of the Product, refund a pro-rated (over
a 12 month period on a straight-line basis) portion of
the payments paid by You to Us over the preceding 12
months for the Product or the affected part.

7.3   We shall have no liability or other obligations
to the extent a claim is based on: (i) failure to use
an Update provided by Us, if infringement could have
been avoided by use of the latest version of the
Products; (ii) combination, operation, or use of
Products with other products not provided by Us, if
such infringement would have been avoided in the
absence of such combination, operation, or use;
(iii) Your use of Product in any manner inconsistent
with the applicable license terms and conditions;
(iv) modification, alteration, or enhancement to the
Product not performed or expressly authorized by Us;
(v) the furnishing to You of any information, service
or technical support by a third party;
(vi) non-licensed use of the Products; or
(vii) Our compliance with Your designs, specifications
or instructions.

THE FOREGOING PROVISIONS OF THIS SECTION STATE THE
ENTIRE LIABILITY AND OBLIGATION OF US AND YOUR
EXCLUSIVE REMEDY FOR CLAIMS OF INFRINGEMENT OF THIRD
PARTY RIGHTS.

8.   TERM AND TERMINATION.

8.1   Unless sooner terminated as provided below, the
term of this Agreement shall begin on the Effective
Date and continue for one year and then automatically
renew for successive one-year terms, unless either
party notifies the other party in writing of its
intent not to renew at least ninety days prior to
the expiration of the initial or then-current
renewal term. If the Agreement term is not renewed,
it shall be deemed to expire upon the earlier of
(i) one year from the end of the then-current term
or (ii) the end of the last remaining Subscription
Term. If a Product is obtained under a perpetual
license, the Agreement shall be deemed not to expire
for purposes of that Product only.

8.2   Notwithstanding the foregoing, either party may
terminate this Agreement or an Order (i) by written
notice of breach of the Agreement or such Order,
provided the other party fails to cure such breach
within thirty days after such notice, or
(ii) forthwith if the other party makes an assignment
for the benefit of creditors or proceedings are
commenced by or for such other party under any
bankruptcy, insolvency, or debtor's relief law.
Upon termination or expiration for any reason, all
rights (including all license rights) and obligations
shall terminate except as provided in this Section
8.2 (and Section 8.1 in the case of expiration only),
and such termination or expiration shall not relieve
You from Your obligation to pay fees that remain
unpaid and shall not limit either party from pursuing
other available remedies.  Upon termination or
expiration of this Agreement or any part thereof, We
shall have no obligation to refund to You any fees
paid by You.  If an Order is terminated or expired,
You must certify in writing to Us that You have
immediately un-installed and destroyed or returned
all copies of the Product within thirty (30) days of
such termination/expiration. The following Sections
survive termination or expiration of this Agreement:
1, 2.1(i) and (ii), 2.2(iv), 4, 5.4, 6, 8, and 9.

9.    GENERAL.

9.1   Confidential Information.  Each party receiving
Confidential Information ("Recipient") shall retain
in confidence and require its employees, agents, and
contractors to retain in confidence all Confidential
Information of the other party ("Discloser").
"Confidential Information" means (i) for Us: the terms
and conditions of this Agreement, all financial terms
and conditions contained in Our quotation, and the
Products as well as results of any Product benchmark
or similar tests (whether performed by Us, You, or
any third party); and (ii) for either party: any
information, in written or other tangible form,
which has been conspicuously marked by Discloser as
"confidential" or "proprietary" or if not so marked,
if it should reasonably be regarded as confidential
due to the nature of the information being disclosed.
Recipient shall protect Discloser's Confidential
Information in the same manner Recipient protects
its own Confidential Information of similar
importance, but in no event with less than reasonable
care. Confidential Information shall remain the sole
property of the Discloser and shall not be disclosed
to any third party (except, solely to employees,
attorneys, consultants, and subsidiaries, who need to
know and are bound by a written agreement with
Recipient to maintain the confidentiality of such
Confidential Information in a manner consistent with
this Agreement) or used except as permitted under
this Agreement.  Confidential Information shall not
include any information that: (i) is or becomes
publicly known without the Recipient's breach of
any obligations owed to the Discloser; (ii) is
rightfully disclosed to the Recipient from a source
other than the Discloser without a breach of an
obligation of confidentiality; or (iii) is
independently developed by the Recipient without
any access to the Discloser's Confidential
Information. Notwithstanding the foregoing, We may
disclose that You are Our customer.  In addition,
either party may disclose information in compliance
with applicable law or a court order, provided the
Discloser is given reasonably prompt notice thereof
and the Recipient provides cooperation and
assistance in any attempt to prevent or limit such
disclosure. The obligations set forth herein with
respect to Confidential Information shall continue
in full force and effect for a period of three (3)
years after the date of termination of this
Agreement.

9.2   Relationship of the Parties.  This Agreement
is not intended to and shall not create a relationship
such as a partnership, franchise, joint venture,
fiduciary, agency or employment relationship. Neither
party may act in a manner that expresses or implies a
relationship other than that of independent contractor,
nor bind the other party.

9.3   Governing Law and Venue.  Any action related to
this Agreement shall be governed by California law and
controlling U.S. federal law, and the choice of law
rules of any jurisdiction shall not apply.  The
parties agree that the United Nations Convention on
Contracts for the International Sale of Goods shall
not apply to this Agreement.  The venue for any claims
arising under this Agreement shall be the federal
courts located in the Northern District of California
or the state courts located in Santa Clara County,
California, and the parties agree to submit to the
exclusive jurisdiction of such courts.

9.4   Assignment.  Neither this Agreement nor any
right, obligation, or Product licensed hereunder
may be assigned by You without Our prior written
consent. Any purported assignment in violation of
the foregoing is void.  Subject to the foregoing,
the provisions of this Agreement shall be binding
upon and inure to the benefit of the parties, and
their permitted successors and assigns.

9.5   Severability.  If any provision of this
Agreement is declared unlawful, void, or
unenforceable, then that provision shall be
limited to the extent enforceable, or otherwise
severed, and will not affect the validity and
enforceability of the remaining provisions.

9.6   Audits.  During the term of this Agreement
and continuing until two years after termination
or expiration, You shall keep and retain complete
and accurate records regarding Your use of the
Products.

i) Self-Audits.  To help manage Your use of the
Products and Your compliance with this Agreement,
You agree to perform a self-audit upon 10 working
days prior written notice from Us, on the self-
audit form made available by Us. If Your self-audit
form reveals a discrepancy that You have
previously or are currently using more of Our
products than You have valid Orders or licenses for,
You must pay Us the unpaid amounts at the same time
as returning the self-audit form to Us. In the
event that You are late in submitting a self-audit
form We may delay accepting orders and/or suspend
Support Services until We receive the self-audit
form and We may instigate the Formal Audit process
defined below.

ii) Formal Audits.  We, or Our designated agent,
may, upon five (5) working days prior written
notice to You, inspect any of Your facilities
where Products are used and audit records for the
purpose of confirming Your use of the Products and
Your compliance with this Agreement. We may perform
only one formal audit per twelve (12) month period
unless a previous audit reveals a discrepancy.  Our
audit shall be performed at Our sole expense;
provided however, that if, as a result of Our audit,
it is determined that You have underpaid Us by more
than 5% of the amount owed during the period audited,
then You shall bear the reasonable cost of Our audit.
In the event of any underpayment, You shall pay all
past-due fees immediately in accordance with the terms
of this Agreement. This section survives termination
of this Agreement for two (2) years.

9.7   Force Majeure.  Except with respect to the
obligation to pay fees when due hereunder, neither
party shall be deemed in default of this Agreement
because of a delay or failure in performance of its
obligation resulting from any cause beyond its
reasonable control (a "Force Majeure"), provided
it gives reasonably prompt notice of the Force
Majeure condition to the other party and uses
reasonable efforts to mitigate the delay or failure.

9.8   Notices.  Any notices required or permitted
to be given hereunder shall be delivered by
personal delivery, express courier, or recorded
delivery, postage prepaid, return receipt requested,
to a party's address set forth in an Order, or if to
You to Your headquarters or to Us to: Actian Corporation,
Attn: Legal Department, 710 Hesters Crossing Road, Suite
250, Round Rock, TX 78681.  A notice shall be deemed
effective when actually delivered. Either party may
change its address for purposes of this Agreement by
written notice given in accordance herewith.

9.9   Marketing.  Except if required to do so by the
Securities Exchange Commission, regulatory authority
or similar body, neither party shall provide copies
of this Agreement or otherwise disclose its terms to
any third party, without the prior written consent
of the other, which consent shall not be unreasonably
withheld or delayed.  The parties agree that within
thirty (30) days of the Effective Date We may issue
a press announcement describing the relationship of
the parties.  You agree to allow Us to reference and
identify You, and use Your logo in Our advertising,
sales promotion, press releases, public filings,
website usage, and other publicity matters relating
to the Products furnished and/or the related Support
Services performed pursuant to this Agreement, so
long as such use is without any modification of Your
name, mark, or logo.

You agree to act as a "Reference Account" for Us.  In
such cases where You have agreed to serve as a
"Reference Account," We shall be allowed to refer
other customers, potential customers, press, analysts,
etc., to Your executives, who are familiar with Your
relationship with Us, to act as a reference for Us.

9.10  U.S. Government End Users.  The software is
"commercial items" as that term is defined at 48 C.F.R.
2.101, consisting of "commercial computer software"
and "commercial computer software documentation" as
such terms are used in 48 C.F.R. 12.212.  Consistent
with 48 C.F.R. 12.212 and 48 C.F.R. 227.7202-1 through
227.7202-4, all U.S. Government end users acquire the
software with only those rights set forth under this
Agreement.  Any technical data provided that is not
covered by the above provisions shall be deemed
"technical data-commercial items" pursuant to 48 C.F.R.
252.227.7015(a).  Any use, modification, reproduction,
release, performance, display or disclosure of such
technical data shall be governed by the terms of 48
C.F.R. 252.227.7015(b).

9.11 High Risk Activities.  The Products are not
fault-tolerant and not designed, manufactured or
intended for use or resale as on-line control equipment
in hazardous environments requiring fail-safe
performance, such as in the operation of nuclear
facilities, aircraft navigation or communication
systems, air traffic control, direct life support machines,
or weapons systems, in which the failure of the Product
could lead directly to death, personal injury, or severe
physical or environmental damage ("High Risk Activities").
We and Our suppliers specifically disclaim any express or
implied warranty of fitness for High Risk Activities.

9.12 Third Party Rights.  Notwithstanding any other
provision in this Agreement, nothing in this
Agreement shall create or confer any rights or other
benefits in favour of any person not a party hereto,
except with respect to Microsoft software included in
the Products. Microsoft is a third party beneficiary
with the right to enforce its right in its software.

9.13 Injunctive Relief.  You acknowledge that the
Products contain Our and Our licensees' valuable
trade secrets and proprietary information and that
any actual or threatened disclosure or unauthorized
use or distribution of the Products or Our or Our
licensees' Confidential Information will constitute
immediate and irreparable harm to Us for which
monetary damages would be an inadequate remedy and
entitle Us to immediate injunctive relief without
the need to post a bond or show actual monetary
damages.

9.14 Integration and Amendment.  This Agreement
constitutes the entire agreement between the
parties and supersedes all prior or contemporaneous
conditions, agreements, communications or
representations, whether oral or written, relating
to the subject matter hereof.  Neither party has
relied on any statement or representation by an
employee or agent of the other party in entering
into this Agreement.  Any additional or different
terms in Your documents (including any terms
contained on Purchase Orders) shall not apply and are
hereby deemed to be material alterations and notice of
objection to, and rejection of them is hereby given.
Except as permitted herein, this Agreement may not be
modified or any term or condition waived except in
writing signed by a duly authorized representative
of each party.  No waiver of any breach of any
provision of this Agreement shall constitute a
waiver of any prior, concurrent or subsequent breach
of the same or any other provision hereof.  Headings
are for convenience only and shall not affect the
interpretation of any provision hereunder.

YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS
AGREEMENT AND HEREBY AGREE TO BE BOUND BY THE TERMS AND
CONDITIONS OF THIS AGREEMENT BY SETTING THE ENVIRONMENT VARIABLE
"ACCEPT_ACTIAN_EULA=Y" WHEN RUNNING THIS SOFTWARE.
```