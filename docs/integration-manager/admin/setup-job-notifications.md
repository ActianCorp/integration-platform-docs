---
title: Configuring Job Notifications
---

# Configuring Job Notifications

Integration Manager has the capability of sending email notifications for certain job completion events (not currently available for DataCloud SaaS accounts).

This feature requires access to an external SMTP server in order to deliver the email notifications. SMTP is currently the only supported protocol for job notifications.

## Configuring Notification Properties

To configure Integration Manager notification properties:

1. Enable Integration Manager to connect to your SMTP server and format the notifications by adding the following entries to your `application.properties` file:

    ```
    # SMTP Connection Info
    spring.mail.host= [hostname of the smtp server]
    spring.mail.username= [username to access smtp server (with send email permissions)]
    spring.mail.password= [password to access smtp server]
    ```

    ```
    # Job Notifications Config
    notifications.enabled=true
    notifications.mailFrom=noreply@yourcompanydomain.com
    notifications.mailTo=admin@yourcompanydomain.com,finance@yourcompanydomain.com
    notifications.attachLogs=true
    ```
    
2. Restart the Integration Manager service.

## Example Configuration Using Gmail SMTP

This example shows how to configure Integration Manager to use the Gmail SMTP server to send job notification emails.

1. Go to the Google account from which you want to send the email.
2. Select **Manage your Google Account**:

      ![](/img/Google-Account.png)
3. If 2-Step Verification is not already turned on for your account, click **Security**, scroll down to **How you sign in to Google**, click **2-Step Verification**, then click **Turn on 2-Step Verification**.
4. In the search bar, enter **App passwords**:
   
      ![](/img/App-Passwords1.png)
5. Enter a name for the app and click **Create**:

      ![](/img/App-Passwords2.png)
6. Copy the generated app password:

      ![](/img/App-Passwords3.png)
7. Configure `application.properties` as shown below, using the copied app password as the value for `spring.mail.password`:

    <pre>
        notification.enabled=true
        notification.mailFrom=some.user<span>@</span>gmail.com
        notification.mailTo=some.user<span>@</span>example.com
        notification.attachLogs=true
        spring.mail.host=smtp.gmail.com
        spring.mail.username=some.user<span>@</span>gmail.com
        spring.mail.password=<font className="codeHighlight">abcd efgh ijkl mnop</font> # Google App Password, not Gmail Password
        spring.mail.properties.mail.transport.protocol=smtp
        spring.mail.properties.mail.smtp.port=587
        spring.mail.properties.mail.smtp.auth=true
        spring.mail.properties.mail.smtp.starttls.enable=true
        spring.mail.properties.mail.smtp.starttls.required=true
    </pre>

8. Restart the Integration Manager service.
9. To test notifications, refer to [Subscribing to Job Notifications](../jobs/subscribing-to-job-notifications).