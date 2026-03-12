---
title: Remediation Rules
toc_max_heading_level: 2
---

# Remediation Rules

Remediation rules fix inaccuracies in source data. This can include tasks such as removing duplicate records, standardizing format and data types, and filling in missing values. During profile execution, the Remediation rules are processed first, followed by the Profiling Rules. The processing order ensures that the changes specified in the Remediation rules are applied to your data before the Profiling rules are evaluated.

Rules can be configured in any order. While you can reorder the Remediation rules by moving them up or down, the Profiling rules cannot be reordered. The Remediation rules are executed in the order you create them or reorder them on the Rules tab and the results may vary as per their order. However, the RemoveDuplicates and RemoveDuplicatesFuzzyMatching rules will always be processed last.

See [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm#ww1423441) for information about adding rules.

The following is a list of remediation rules:

| Rule Name | Description |
| :--- | :--- |
| [ChangeFormat](#changeformat) | Changes the format of a string field from one format to another (applies to string fields which can be parsed as numbers/boolean types). |
| [ChangeStringCase](#changestringcase) | Changes the case of a string field to specified case (for example upper, lower, title). |
| [DeidentifyValue](#deidentifyvalue) | Masks or encrypts data so that it cannot be linked to an individual, but can still be shared without risk of exposing sensitive personal information. |
| [ModifyDate](#modifydate) | Calculates and modifies a Date or Timestamp field. |
| [RemoveChars](#removechars) | Removes specified characters or words from a string field. |
| [RemoveDuplicates](#removeduplicates) | Writes unique records to pass target and duplicate records to fail target using exact match. |
| [RemoveDuplicatesFuzzyMatching](#removeduplicatesfuzzymatching) | Writes unique records to pass target and duplicate records to fail target based on fuzzy matching rules and match score filter. |
| [ReplaceValue](#replacevalue) | Replaces a field value with a new value. |
| [Rounding](#rounding) | Changes numeric values by applying a rounding mode and decimal precision. |
| [StandardizeCity](#standardizecity) | Changes the names of major cities to conform to a specified pattern. |
| [StandardizeCurrency](#standardizecurrency) | Changes the format of monetary values to conform to a specified pattern. |
| [StandardizeDateFormat](#standardizedateformat) | Converts a date value from one regional or format standard to another. |
| [StandardizeTimeFormat](#standardizetimeformat) | Converts a time value from one regional or format standard to another. |
| [StandardizeEmail](#standardizeemail) | Changes the format of email addresses to meet specified requirements for data privacy, system migration, and record deduplication. |
| [StandardizePhoneNumber](#standardizephonenumber) | Changes the format of phone numbers to conform to a specified pattern. |
| [StandardizePOBox](#standardizepobox) | Changes the format of post office boxes to conform to a specified pattern. |
| [StandardizePostalCode](#standardizepostalcode) | Changes the format of postal codes to conform to a specified pattern. |
| [StandardizeState](#standardizestate) | Changes the format of states to conform to a specified pattern. |
| [StringTrim](#stringtrim) | Trims whitespace from a String field. |

---

## ChangeFormat

This function rule changes the format of a source string field from one format to another (applies to string fields which can be parsed as string/numbers/boolean types).

### Rule Properties

This rule has the following properties.

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ChangeFormat`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Group (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ChangeFormat` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Format Type** | Select the format type of the source data (this selection populates the options available in the From Format and To Format parameters): <ul><li>Boolean</li><li>Double</li><li>Float</li><li>Integer</li><li>Long</li><li>Numeric</li><li>String</li></ul> |
| **From Format** | Select source field format(s) to change from, or type into the field, then click **Add** (or the Enter key). Multiple formats can be added. To remove an added format click the icon displayed next to the format. Depending on the Format Type selected: <ul><li>**Boolean**: Replaces the different combinations of source values like yes/no, true/false, True/False, 1/0, etc., into a consistent set of values like True/False.</li><li>**Double**: Converts source values with a format like `#.##`, `.00`, `.#`, etc., into a consistent format. For example, set From Format to `#.#` and To Format to `#.00` to change the format from `50` to `50.00`. See [Class DecimalFormat](https://docs.oracle.com/en/java/javase/11/docs/api///java.base/java/text/DecimalFormat.html).</li><li>**Float**: Converts source values with a format like `#.##`, `.00`, `.#`, etc., into a consistently formatted float value. See Class DecimalFormat.</li><li>**Integer**: Converts source values with a format like `#`, `-#`, etc., into a consistently formatted integer value. See Class DecimalFormat.</li><li>**Long**: Converts source values into consistently formatted long values. See Class DecimalFormat.</li><li>**Numeric**: Converts source values into consistently formatted numeric values.</li><li>**String**: Converts source values using the specified format pattern.</li></ul> |
| **To Format** | Select the format to change the source to from the drop-down menu, or type into the field. Unlike the From Format, only one format is permitted in the To Format parameter. |
| **Rounding Mode** | Applies if input data is of the type Double, Float, and Numeric. Available options: <ul><li>**CEILING** - Rounding mode to round towards positive infinity.</li><li>**DOWN** - Rounding mode to round towards zero.</li><li>**FLOOR** - Rounding mode to round towards negative infinity.</li><li>**HALF_DOWN** - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which case round down.</li><li>**HALF_EVEN** - Rounding mode to round towards the "nearest neighbor" unless both neighbors are equidistant, in which case round towards the even neighbor.</li><li>**HALF_UP** - Rounding mode to round towards "nearest neighbor" unless both neighbors are equidistant, in which case round up.</li><li>**UNNECESSARY** - Rounding mode to assert that the requested operation has an exact result, hence no rounding is necessary.</li><li>**UP** - Rounding mode to round away from zero.</li></ul> |
| **Locale** | The language or country-based preferences for a user interface. Among other things, locales represent currency, date format, and numbers according to the protocols in the given region. |

### Supported Data Types

- Input: String
- Output: String

### Examples

- **Boolean**: Useful if a source column contains different combinations of values like yes/no, true/false, True/False, 1/0 and you want to convert it to a consistent set of values like True/False.
- **String**: For example, the regular expression `(.+?)\s(.+?)?\s*(.+?)` can be used to identify the first name, middle name (if present), and last name in your input. You can then reorganize the names using the format `$3 $1 ($2|-NA-)`. Thus, a name like "John V Doe" is reformatted as "Doe, John V", and "Peter Parker" (no middle name) becomes "Parker, Peter -NA-".

### Remarks

- This rule replaces the format and not the values.
- When replacing values in the target field, you may encounter a truncation error, often due to a mismatch in field sizes between the target field and the replacement value. To resolve this, adjust the field size of the target field according to the replaced/overwritten value size.
- See [DateTime Format](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html).
- See [Class DecimalFormat](https://docs.oracle.com/en/java/javase/11/docs/api///java.base/java/text/DecimalFormat.html).

---

## ChangeStringCase

This function rule changes the case of a string field to specified case (for example upper, lower, and title).

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ChangeStringCase`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Name (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ChangeStringCase` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Change To Case** | Select the case to convert the string to: <ul><li>**Camel Case** - Converts string to camel case. All words of a phrase are combined together to form one continuous word and each word except the first word is capitalized.</li><li>**Kebab Case** - Converts string to kebab case. Spaces are replaced with hyphens (`-`) and the words are typically all lower case.</li><li>**Lower Case** - Converts all characters in the string to lowercase.</li><li>**Pascal Case** - Converts string to pascal case. All words of a phrase are combined together to form one continuous word and each word is capitalized.</li><li>**Snake Case** - Converts string to snake case. Spaces are replaced with underscores (`_`) and the words are typically all lower case.</li><li>**Title Case** - Converts string to title case. The first letter of each word is capitalized except for certain small words like "a", "an", "the".</li><li>**Upper Case** - Converts all characters in the string to uppercase.</li></ul> |

### Supported Data Types

- Input: String
- Output: String

### Remarks

None.

---

## DeidentifyValue

This function rule changes data via masking or encryption so that it cannot be linked to an individual. The masked or encrypted data can then be shared without risk of exposing sensitive personal information.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>DeidentifyValue`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Name (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `DeidentifyValue` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Operation** | Select how the data will change: <ul><li>**Mask** - Select this option to replace the value irreversibly, then specify values for the Method, Location, N Value and Replacement Value parameters.</li><li>**Encrypt** - Select this option to encrypt the value. This option requires you to supply a 16-digit encryption key. The same key will be required in order to subsequently decrypt the value (if decryption is necessary).</li></ul> |
| **Method** | This parameter is available when Mask is selected for the Operation. Select the action to perform on the data: <ul><li>**Replace N Characters**: Replaces the number of characters specified in N Value.</li><li>**Keep N Characters**: Retains the number of characters specified in N Value.</li><li>**Replace All**: Replaces all characters in the field. When this option is selected, the Location and N Value fields are disregarded.</li></ul> |
| **Location** | This parameter is available when Mask is selected for the Operation. Select which portion of the field to perform the selected Method on: <ul><li>**Start**: Performs the selected Method on the beginning portion of the value.</li><li>**Middle**: Performs the selected Method on the center portion of the value.</li><li>**End**: Performs the selected Method on the end portion of the value.</li></ul> |
| **N Value** | Available when Mask is selected. Specify the number of characters to perform the selected Method on. Maximum value is 9. Default is 4. |
| **Replacement Value** | This parameter is available when Mask is selected for the Operation. Select a replacement character, or enter a character of your choice. Predefined options are: <ul><li>Asterisk</li><li>Lowercase x</li><li>Uppercase X</li><li>Hyphen (-)</li><li>Pound Sign (#)</li><li>At Sign (@)</li><li>Underscore (_)</li></ul> |
| **Key** | Available when Encrypt is selected. Enter a 16-digit encryption key. This is also the key required to subsequently decrypt the value. It is highly recommended that an encrypted macro be used for the key. |

### Supported Data Types

- Input: String
- Output: String

### Remarks

To decrypt values encrypted with this operation, you will need the following parameters. Ensure these details are stored securely.

- **Encryption Algorithm**: AES/CBC/PKCS5Padding
- **Key Algorithm**: AES
- **Key Format**: Plain Text
- **Key Length**: 16 bytes (128 bits)
- **Initialization Vector (IV)**: An IV is used; IV Length: 16 bytes (128 bits)
- **Base64 Encoding**: The final encrypted output is Base64 encoded.

:::note
Both the Key and the Initialization Vector (IV) used during the encryption process are required for decryption. The IV is typically prepended to or returned alongside the encrypted data.
:::

---

## ModifyDate

This function rule calculates and modifies Date and Timestamp data types. It is useful for tasks such as:

- Adjusting time to a specific time zone.
- Timestamping transactions.
- Calculating future due dates, times, or expiration dates.
- Tracking Service Level Agreement (SLA) response times.

This rule only appears in the Add New Rule menu for Date and Timestamp fields.

:::tip
If the data type is String, you can use the [StringToConversion](https://testdocs.actian.com/dataconnect/12.5/User/Data_Prep_Rules.htm#ww797761) rule for conversion to the Date or Timestamp data type.
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ModifyDate`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Expiration (Date)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ModifyDate` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Time Unit** | Select the unit of time for the calculation (only for the Timestamp data type): <ul><li>Years</li><li>Months</li><li>Days</li><li>Hours</li><li>Minutes</li><li>Seconds</li><li>Milliseconds</li></ul> |
| **Amount to add/subtract** | Enter the amount to add (positive number, for example, `3`) or subtract (negative number, for example, `-3`). |

### Supported Data Types

- Input: Date, Timestamp
- Output: Date, Timestamp

### Examples

#### Example: Time Zone Adjustment

Use Case: Display times and timestamp transactions in the local time zone.

To change a value from Pacific Standard Time (`2026-01-07 05:00:00`) to Eastern Standard Time, add 3 hours to get the output `2026-01-07 08:00:00`.

- **Time Unit**: Hours
- **Amount to add/subtract**: 3

#### Example: Due Date Calculation

Use Case: Monitor invoices and track accounts receivable.

To calculate a due date, add 30 days to the order date (`2026-01-07`). The output is `2026-02-06`.

- **Time Unit**: Days
- **Amount to add/subtract**: 30

#### Example: SLA Tracking

Use Case: Monitor customer service response times, track SLA compliance, escalate tickets approaching breach time.

To set a response deadline, add 4 hours to the ticket's open time (`2026-01-07 09:00:00`). The output is `2026-01-07 13:00:00` (SLA deadline).

- **Time Unit**: Hours
- **Amount to add/subtract**: 4

---

## RemoveChars

This function rule removes specified characters or words from a string field.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>RemoveChars`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Name (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `RemoveChars` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Select the character classes to remove** | Tells what to remove from the source field value. You can choose one or multiple options: <ul><li>**Whitespace** - Removes spaces.</li><li>**Digits** - Removes numeric characters.</li><li>**Non Printable Characters** - Removes non printable characters. Non printable characters are symbols that do not visibly appear when printed or displayed. Examples include newline (`\n`) for line breaks and tab (`\t`) for spacing.</li><li>**Special Characters** - Removes any special characters. Special characters are the punctuation characters on your keyboard.</li></ul> |
| **Remove Other** | Choose from one of the following options: <ul><li>**\<None\>** - Choose this when you want to skip specifying the Remove Other option.</li><li>**Literal** - Allows you to specify literal values to search for and remove.</li><li>**Regular Expressions** - Allows you to specify your own regular expression (regex pattern) to search for and remove.</li><li>**Words** - Allows you to specify a comma separated list of word numbers or a range of word numbers to remove. For example `1, 2-4` will remove 1st, 2nd through 4th word.</li></ul> |

### Supported Data Types

- Input: String
- Output: String

### Remarks

See [Java Regular Expressions](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html).

---

## RemoveDuplicates

This test rule writes unique records to pass target and duplicate records to fail target, using exact match. This rule supports all data types.

This rule involves the use of clustering. Clustering refers to grouping similar records together into clusters, based on the comparison of key fields. When the profile is executed, the values in the specified key fields are compared to each other to identify duplicates. If a duplicate value is found, then a cluster containing the duplicate records is created. The cluster is assigned a cluster ID.

After a cluster is created, users can configure a Cluster Matching Rule and a Record Matching Rule to specify criteria for finding unique records within a cluster.

:::note
Only one Remove Duplicates rule is permitted within a profile. However, multiple fields can be designated as key fields. Once added to a profile, this rule will be categorized under **MultipleFields** on the Rules tab, instead of by the name of the key field.

The cluster file is stored as a separate CSV file. In the Project Navigator view, expand the project folder and double-click the `<ProfileName>_RemoveDuplicates.csv` file to view the cluster file.
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`RemoveDuplicates`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `RemoveDuplicates` (Test rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Dimension** | (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension. A dimension represents a characteristic of data quality: <ul><li>Accuracy - The data is correct.</li><li>Completeness - The data is present.</li><li>Consistency - The data uses the same format or pattern across different sources.</li><li>Timeliness - The data is recent and available.</li><li>Uniqueness - The data is not duplicated.</li><li>Validity - The data conforms to business rules and is within an acceptable range.</li></ul> Each dimension generates a Dimension Score for its associated rules. The score indicates the degree to which the data meets the characteristic. Scores can be viewed in the Statistics tab post profile execution. For more information, see [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm#ww1423441). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension). |

Additional properties for this rule are available in the following tabs: Grouping Tab, Sorting Tab, Unique Record Rules Tab, and Cluster Data Tab.

#### Grouping Tab

Select a field from the list of Input Fields as a key field. The values in the key field will be evaluated to identify duplicates or exact matches. If a duplicate value is found, a cluster is created.

| Field | Description |
| :--- | :--- |
| **Input Fields** | List of available fields that can be used as key fields. |
| **Key Fields** | Move fields from Input Fields to Key Fields to define a key field. You can specify a combination of fields.<br />**Note**: Key Fields cannot be selected as Sorting Fields and vice versa. |
| **Results File** | Browse and select a CSV file (only CSV files are supported), or specify the path and name of a CSV file that will be used as the cluster file. You can use macros for filenames. |

#### Sorting Tab

Allows you to arrange the records within each cluster in a specific order. You can sort on multiple fields.

| Field | Description |
| :--- | :--- |
| **Field** | Click the Field box and select a sorting field from the drop-down. |
| **Sort Order** | Click the Sort Order box and select Ascending or Descending for each sorting field. |

#### Unique Record Rules Tab

Provides a way to specify one or more clusters via Cluster Matching Rules, then identify one or more records as unique via Record Matching Rules.

**Cluster Matching Rules** define one or more rules to select clusters. Multiple rules can be combined using AND/OR logical operators.

**Record Matching Rules** identify one or more records as unique. Choose from:

- **None** — All records from the cluster will qualify.
- **Completeness** — Picks the record with the least number of null/blank values.
- **Accuracy** — Picks the record with the highest number of accurate fields (fewest test rule failures).
- **Custom Conditions** — Picks all qualifying records based on custom rules.

**Record Selection** options after applying Unique Record Rules:

- **First** — Picks the first from all qualifying records.
- **Last** — Picks the last from all qualifying records.
- **Any** — Picks any from all qualifying records (usually the first).
- **All** — Picks all of the qualifying records.
- **None** — Picks none of the qualifying records.
- **Range** — Picks from the specified range of records (for example, `1, 2-4`).

#### Cluster Data Tab

The Cluster Data tab is only visible after generating clusters. Select the Remove Duplicates rule on the Rules tab and click the Run button from the Rule Definition pane to generate clusters and browse the cluster file.

| Field | Description |
| :--- | :--- |
| **Select** | Checkbox to select records manually. Selecting desired records and clicking **Generate Rules** creates Unique Record Rules. |
| **$$ClusterId** | The unique ID assigned to each cluster. Note: cluster IDs are not retained between executions. |
| **$$pass** | Blank if the record passed the rule; marked as `X` if the record failed. |
| **$$rule_id** | An ID allocated to each Unique Record Rule; only displayed for unique records identified from Unique Record Rules. |

### Supported Data Types

All data types.

### Remarks

- Provides pass and fail statistics and generates a cluster file. Duplicate records are sent to the fail target; unique records are written to the pass target.
- Only one Remove Duplicates rule is permitted within a profile. However, multiple fields can be designated as key fields. Once the Remove Duplicates rule has been added to a profile, it will be categorized under **MultipleFields** on the Rules tab, instead of by the name of the key field.

---

## RemoveDuplicatesFuzzyMatching

This test rule writes unique records to pass target and duplicate records to fail target based on fuzzy matching rules and match score filter. This rule supports all data types.

Finding "duplicate" data in this case does not mean finding an exact match but means finding an approximately similar record. Fuzzy Matching (also called Approximate String Matching) is a technique that can be used to filter these similar-looking fuzzy duplicates by finding an approximate match.

This rule uses clusters. The main idea in clustering is to group similar records together, into clusters, based on comparison using key fields. When the profile is executed, the values in the specified key field are compared to each other to identify duplicates. If a duplicate value is found, then a cluster is created. The cluster contains the duplicate records, based on the key field, and is assigned a cluster ID.

After a cluster is created, you can configure a Match Score Filter, a Cluster Matching Rule, and a Record Matching Rule to specify criteria for finding approximately similar records within a cluster.

:::note
The duplicate records are written to the fail target and unique records are written to the pass target. The cluster file is stored as a separate CSV file. In the Project Navigator view, expand the project folder and double-click the `<ProfileName>_RemoveDuplicates.csv` file to view the cluster file.
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`RemoveDuplicatesFuzzyMatching`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `RemoveDuplicatesFuzzyMatching` (Test rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Dimension** | (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension. A dimension represents a characteristic of data quality: <ul><li>Accuracy - The data is correct.</li><li>Completeness - The data is present.</li><li>Consistency - The data uses the same format or pattern across different sources.</li><li>Timeliness - The data is recent and available.</li><li>Uniqueness - The data is not duplicated.</li><li>Validity - The data conforms to business rules and is within an acceptable range.</li></ul> Each dimension generates a Dimension Score for its associated rules. The score indicates the degree to which the data meets the characteristic. Scores can be viewed in the Statistics tab post profile execution. For more information, see [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm#ww1423441). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score. |

Additional properties for this rule are available in the following tabs: Grouping Tab, Matching Tab, Sorting Tab, Unique Record Rules Tab, and Cluster Data Tab.

#### Grouping Tab

Select a field from the list of Input Fields as a key field.

| Field | Description |
| :--- | :--- |
| **Input Fields** | List of available fields that can be used as key fields. |
| **Key Fields** | Move fields from Input Fields to Key Fields to define a key field.<br />**Note**: Key Fields cannot be selected as Sorting Fields or Matching Fields and vice versa. |
| **Results File** | Browse and select a CSV file, or specify the path and name of a CSV file that will be used as the cluster file. You can use macros for filenames. |

#### Matching Tab

Allows you to configure string comparison rules and set the match score cutoff.

| Field | Description |
| :--- | :--- |
| **Field Name** | Select a field whose values are compared with each other using the algorithm specified in Comparison Type. This list includes only string fields not used as Key Fields. |
| **Comparison Type** | A list of supported string matching algorithms/functions. See [Remarks](#remarks-6) for supported algorithms. |
| **Weight** | Weightage given to the rule for calculating the final score. Default is 1. Allowed range is 1 to 100. |
| **Match Score Filter** | Select a decimal value between 0.01 to 1. Records with a comparison score less than this value are not considered a match and are discarded. A higher value means stricter matching. |

#### Sorting Tab

Allows you to arrange the records within each cluster in a specific order.

| Field | Description |
| :--- | :--- |
| **Field** | Select a sorting field from the drop-down. |
| **Sort Order** | Select Ascending or Descending for each sorting field. |

#### Unique Record Rules Tab

Same structure as in RemoveDuplicates. Provides Cluster Matching Rules, Record Matching Rules (None, Completeness, Accuracy, Custom Conditions), and Record Selection options (First, Last, Any, All, None, Range).

#### Cluster Data Tab

Same structure as in RemoveDuplicates. Select the rule on the Rules tab and click Run to generate clusters and browse the cluster file.

### Supported Data Types

All data types.

### Remarks

- Provides pass and fail statistics and generates a cluster file. Duplicate records are sent to the fail target; unique records are written to the pass target.
- Only one Remove Duplicates Fuzzy Matching rule is permitted within a profile. However, multiple fields can be designated as key fields. Once the Remove Duplicates Fuzzy Matching rule has been added to a profile, it will be categorized under **MultipleFields** on the Rules tab, instead of by the name of the key field.
- Supported Fuzzy Matching algorithms:
  - **CONTAINS** — Checks if the small string is contained in the long string.
  - **DAMERAU_LEVENSHTEIN** — Minimum number of operations (insertions, deletions, substitutions, or transpositions of adjacent characters) to change one string into another. See [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance).
  - **EXACT_MATCH** — Checks two strings for exact match.
  - **JARO** — A measure of characters in common, being no more than half the length of the longer string, with consideration for transpositions.
  - **JARO_WINKLER** — Extends Jaro algorithm with a prefix scale that gives more favorable ratings to strings that match from the beginning. See [Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance).
  - **LEVENSHTEIN** — Minimum number of single-character edits (insertions, deletions, or substitutions) to change one string into another. See [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).
  - **POSITIONAL_QGRAM** — Q-grams with an additional positional property (`maxDistance`) used in calculating string similarity.
  - **QGRAM** — Breaks a string into multiple substrings of length n (q-grams). Similarity is calculated by counting the number of q-grams in common.
  - **SHORTHAND** — Determines if the shorter string is a "shorthand" of the longer (produced only by deletions). For example, IBM is a shorthand of International Business Machines.

### Example: Using RemoveDuplicatesFuzzyMatching

The following example demonstrates how to use the RemoveDuplicatesFuzzyMatching rule with address data containing fields such as `first_name`, `last_name`, `company`, and `zip`.

**Step 1:** Create a profile with your data source. In the Rules tab, select a string field (for example, `zip`) and add the **RemoveDuplicatesFuzzyMatching** rule.

**Step 2:** Configure key fields. On the **Grouping** tab, move `zip` to the **Key Fields** list. Records with the same zip code will be grouped into clusters.

:::note
Key Fields cannot be selected as Matching Fields or Sorting Fields and vice versa.
:::

**Step 3:** Configure sorting. Go to the **Sorting** tab. Choose `zip` as the sort field within each cluster. Sorting helps organize records logically when reviewing potential duplicates.

**Step 4:** Run the rule. Click **Run** to execute the profile. When processing is complete, you are navigated to the Results page. Click on the **RemoveDuplicatesFuzzyMatching** rule. On the right side of the screen, you will see a pass/fail pie chart summarizing the results.

**Step 5:** Review clusters. Below the pie chart, click **Browse Cluster File** to view the generated clusters. You will now see grouped clusters. For example, Cluster 30 contains all records where `first_name = "Chuck"`. Within that cluster, you will observe similar `last_name` values and similar `company` values, indicating likely duplicate records. You may determine that the record with Id `569000` appears to be the most accurate or complete version and therefore is the best candidate to keep.

**Step 6:** Select the record to keep. To retain specific records:

1. Go back to the **Rules** tab.
2. Click the **Run** button on the right side of the Rule Definition. This opens the Cluster Data Browser in editable mode.
3. Select the record(s) you want to keep.
4. Click **Generate Rules**. The system generates the necessary rules to preserve the selected record(s) and remove the others.

**Step 7:** Repeat the process. The process can be repeated for controlled and precise duplicate resolution:

1. Review a cluster.
2. Select one or more records to keep.
3. Click **Generate Rules** for each cluster as needed.

---

## ReplaceValue

This function rule replaces field values based on a specified constant, field, function result, regular expression result, or a lookup result. This rule also enables users the option to replace values only if a specified condition is met.

:::note
When writing replaced values to a target field, you may encounter a truncation error, often due to a mismatch in field sizes between the target field and the replacement value. To resolve this, adjust the field size of the target field according to the replaced/overwritten value size.
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName><ReplaceValue>`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ReplaceValue` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a required parameter that has not been defined. |

### Rule Parameters

Select an option from the **Replace Function Choices** drop-down list.

| Option | Description |
| :--- | :--- |
| **Replace with Constant** | Replaces the field value with the specified Constant. <ul><li>**Constant** - Enter the constant value with which to replace.</li></ul> |
| **Replace with Field** | Replaces the field value with the specified alternate source Field value. <ul><li>**Field** - Select the field from which to replace.</li></ul> |
| **Replace with Function Results** | (Available for string fields) Replaces the field value with the selected function results. Options: **ChangeStringCase** or **StringTrim**. |
| **Replace with Lookup** | Replaces a source field value with a value from an in-core lookup stored in memory (RAM). See [Replace with Lookup](#replace-with-lookup) for more information. |
| **Replace with RegX** | (Available for string fields) Replaces what matches the specified regular expression with the replacement value. See [Replace with RegX](#replace-with-regx) for more information. |
| **Select Condition** | (Optional) Select the condition that must be met for replacing a value: <ul><li>CompareToConstant</li><li>CompareToField</li><li>FuzzyMatch (see IsNotBlank)</li><li>IsBlank - (available for string fields) - Replaces if the field value is blank.</li><li>MatchesRegex</li></ul> |

### Replace with Lookup

This option performs a lookup (searching and retrieving values from another dataset). The lookup data is stored in memory (RAM).

During execution, when the Lookup Key Field and the Matching Key Field values match, the lookup Replacement Field value replaces the data field value before writing to the target.

This option supports all data types. However, the Lookup Key Field and Matching Key Field values must be the same data type.

| Parameter | Description |
| :--- | :--- |
| **Lookup Name** | Click **Add** to create a lookup in the Lookup Configuration Wizard, or select a lookup from the drop-down list. |
| **Lookup Key Field** | The lookup field selected in the Lookup Configuration Wizard. Contains the lookup values to compare against the Matching Key Field. When the two match, the Replacement Field value is used. If no match is found, the field is replaced with null or blank. |
| **Matching Key Field** | Select the field in the source (or derived field) to match against the Lookup Key Field. |
| **Replacement Field** | Select the field in the lookup that contains the replacement value. |
| **Select Condition** | (Optional) Select the condition that must be met for replacing a value: <ul><li>CompareToConstant</li><li>CompareToField</li><li>FuzzyMatch (see IsNotBlank)</li><li>IsBlank - (available for string fields) - Replaces if the field value is blank.</li><li>MatchesRegex</li></ul> |

#### Configuring a ReplaceValue Rule (Lookup)

1. On the Rules tab, select the field to which the lookup will be applied, then click **Add New Rule**. The Add Rules dialog opens.
2. On the Remediation tab, select **ReplaceValue**, and click **Finish**. The Rule Definition pane opens.
3. In the Rule Definition pane, select **Replace with Lookup** from the Replace Function Choices drop-down list and click the icon next to the Lookup Name to open the Lookup Configuration Wizard.
4. In the Lookup Configuration Wizard:
   - Enter a name for the lookup and add an optional description.
   - Configure the lookup data connection properties, click **Connect**, then **Next**.
   - Verify you are connected to the correct lookup data and note the column to use for the Lookup Key Field, then click **Next**.
   - In the Field Name column, select the Lookup Key Field and click **Finish**.
5. In the Rule Definition pane, set **Matching Key Field** (source field to match) and **Replacement Field** (lookup field with replacement values).
6. Save the profile, then click **Run** to execute.

#### Example: Replacing StateCode Values with StateName Values

A source State column contains state codes (for example, `CA`, `TX`). The goal is to replace them with state names (for example, `California`, `Texas`).

Configuration:
- **Replace Function Choices**: Replace with Lookup
- **Lookup Name**: `state_lookup` (connected to a file with `StateCode` and `StateName` columns)
- **Lookup Key Field**: `StateCode`
- **Matching Key Field**: `State`
- **Replacement Field**: `StateName`

:::note
If multiple matches of the StateCode are found, the first instance of the StateName is used.
:::

### Replace with RegX

This option replaces what matches the specified regular expression with the replacement value, before writing to the target field.

| Parameter | Description |
| :--- | :--- |
| **Pattern** | The regex pattern to search for. See [Java Regular Expressions](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html). |
| **Replacement** | The replacement value. |
| **Occurrences** | The field occurrences to replace. For example, `1, 3-4, 7`. You can also specify `all`. If left blank, all instances are replaced. |
| **Select Condition** | (Optional) Select the condition that must be met for replacing a value: <ul><li>CompareToConstant</li><li>CompareToField</li><li>FuzzyMatch (see IsNotBlank)</li><li>IsBlank - (available for string fields) - Replaces if the field value is blank.</li><li>MatchesRegex</li></ul> |

### Supported Data Types

All data types.

### Remarks

When replacing values in the target field, you may encounter a truncation error due to a mismatch in field sizes. To resolve this, adjust the field size of the target field according to the replaced/overwritten value size.

---

## Rounding

This function rule standardizes numeric values by applying a Rounding Mode (for example, up or down, towards nearest neighbor) and Decimal Precision (specifying to what extent to round by the number of decimal places).

This rule:
- **Ensures Consistency and Accuracy**: Crucial for maintaining uniform data presentation in reports, dashboards, and financial documents.
- **Compliance**: Helps meet regulatory requirements for standardized decimal precision in areas like currency.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>Rounding`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Balance (Numeric)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `Rounding` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Rounding Mode** | Specifies the method used for rounding numeric values: <ul><li>**UP**: Round away from zero.</li><li>**DOWN**: Round towards zero.</li><li>**CEILING**: Round towards positive infinity.</li><li>**FLOOR**: Round towards negative infinity.</li><li>**HALF_UP**: Round towards nearest neighbor (rounds up if equidistant).</li><li>**HALF_DOWN**: Round towards nearest neighbor (rounds down if equidistant).</li><li>**HALF_EVEN**: Round towards nearest neighbor (rounds to even if equidistant). Also known as Banker's Rounding.</li><li>**UNNECESSARY**: No rounding is required; throws exception if rounding is needed. This mode is typically used when there's a need to strictly validate that data does not need rounding.</li></ul> |
| **Decimal Precision** | An integer value (0 or greater) indicating the total number of digits to the right of the decimal point in the final rounded result. |

### Supported Data Types

- Input: Numeric
- Output: Numeric

### Examples

#### Example: Financial Calculations (Currency Rounding)

Input: `123.4567` → Output: `123.46`

- **Rounding Mode**: HALF_UP
- **Decimal Precision**: 2

#### Example: Data Standardization (Reporting)

Input: `98.765` → Output: `98.7`

- **Rounding Mode**: HALF_UP
- **Decimal Precision**: 1

#### Example: Threshold Enforcement (Quality Control)

Input: `49.8` → Output: `50`

- **Rounding Mode**: UP
- **Decimal Precision**: 0

#### Example: Scientific Data Processing (Statistical Rounding)

Input: `5.725` → Output: `5.72` (rounds to nearest even)

- **Rounding Mode**: HALF_EVEN
- **Decimal Precision**: 2

#### Example: Capacity and Inventory Management (Guaranteed Upper Bound)

Input: `12.01` (pallets) → Output: `13`

- **Rounding Mode**: CEILING
- **Decimal Precision**: 0

#### Example: Tax and Discount Calculations (Guaranteed Lower Bound)

Input: `45.999` → Output: `45.99`

- **Rounding Mode**: FLOOR
- **Decimal Precision**: 2

### Negative Values and Rounding Behavior

Rounding modes behave differently for negative numbers.

| Mode | Positive Input (e.g., 1.5) | Negative Input (e.g., -1.5) | Key Principle |
| :--- | :--- | :--- | :--- |
| UP | 2 (away from zero) | -2 (away from zero) | Towards Infinity (Magnitude) |
| DOWN | 1 (towards zero) | -1 (towards zero) | Towards Zero |
| CEILING | 2 (towards positive infinity) | -1 (towards positive infinity) | Towards Positive |
| FLOOR | 1 (towards negative infinity) | -2 (towards negative infinity) | Towards Negative Infinity |
| HALF_UP | 2 (nearest neighbor) | -2 (nearest neighbor) | Nearest Neighbor (Symmetrical) |
| HALF_DOWN | 2 (nearest neighbor) | -1 (nearest neighbor) | Nearest Neighbor (Symmetrical) |

---

## StandardizeCity

This function rule changes the names of major cities to conform to a specified spelling and pattern. This rule allows fuzzy matching, which is useful for correcting misspellings and typos.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizeCity`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `City (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeCity` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Abbreviation Handling** | This parameter applies to names of cities that contain a word that can be written in an abbreviated format. Select the format to apply to abbreviations within a name: <ul><li>**Expand** - Changes abbreviated entries to words (for example, `St.` is changed to `Saint`, `Mt.` is changed to `Mount`). This option is useful for matching USPS preferred city names.</li><li>**Abbreviate** - Changes words to abbreviations (for example, `Saint` is changed to `St.`, `Mount` is changed to `Mt`).</li><li>**Keep As Is** - Does not modify the entries.</li></ul> |
| **Special Character Handling** | Select the pattern to apply to special characters: <ul><li>**Remove Accents** - Removes all accents/special characters (for example, `Montréal` is changed to `Montreal`).</li><li>**Keep Original** - The output is based on the region (for example, if the input is `montreal` the output will be `Montréal` which preserves the regional spelling).</li><li>**Convert to ASCII** - The output is in ASCII format (for example, if the input is `São Paulo` the output will be `Sao Paulo`). This option is useful if data must be stored in a system that doesn't support Unicode.</li></ul> |
| **Enable Fuzzy Matching** | Select to configure Fuzzy Matching. Useful for correcting misspellings and typos. |
| **Fuzzy Matching Algorithm** | This field is available when Enable Fuzzy Matching is selected. Select from one of the following algorithms: <ul><li>**CONTAINS**: Checks the small string in the long string.</li><li>**DAMERAU–LEVENSHTEIN**: The distance between two strings is the minimum number of operations (insertions, deletions or substitutions of a single character, or transposition of two adjacent characters) required to change one string into another. For more information, see [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance).</li><li>**EXACT MATCH**: Checks two strings for exact match.</li><li>**JARO**: A measure of characters in common, being no more than half the length of the longer string in distance with consideration for transpositions.</li><li>**JARO-WINKLER**: Extends the Jaro algorithm and uses a prefix scale that gives more favorable ratings to strings that match from the beginning for a set prefix length. The prefix length is set to 4 characters. For more information, see [Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance).</li><li>**LEVENSHTEIN**: The distance between two strings is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into another. For more information, see [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).</li><li>**POSITIONAL_QGRAM**: Positional q-grams is an extension to q-grams with an additional property called maxDistance used in calculating the string similarity.</li><li>**QGRAM**: Q-grams (also called n-grams) is the process of breaking up a string into multiple strings each with length n. A q-gram similarity measure between two strings is calculated by counting the number of q-grams in common.</li><li>**SHORTHAND**: Determines if the shorter string is a "shorthand" of the longer (that is, if it can be produced only by deletions). For example, IBM is a shorthand of International Business Machines.</li></ul> |
| **Fuzzy Score Filter** | Enter a decimal value between 0.01 to 1. Default value is 0.7. Comparison score is between 0 to 1. Records with comparison score less than this value are not considered a match for probable duplicates and are discarded. The higher the value, the stricter the matching. This field is available when Enable Fuzzy Matching is selected. |

### Supported Data Types

- Input: String
- Output: String

---

## StandardizeCurrency

This function rule ensures consistency in how monetary values are formatted and stored. It automatically detects the format of a currency value based on a specified source country/region and applies formatting using a target region combined with a defined style.

The Target Region determines the currency identity (symbol and ISO code), while the Format Style controls how that currency is presented. It can optionally convert the currency value using a provided exchange rate.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizeCurrency`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Balance (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeCurrency` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Source Region** | Select the source country/region of the input currency value, used for format detection. |
| **Target Region** | Select the target region of the output currency value to which locale-specific formatting rules will be applied (for example, thousands separators, decimal points, symbol placement).<br />**Note**: Setting the Target Region automatically applies default locale formatting. For example, the US uses a comma for thousands and a period for decimals (`$1,234.56`). In contrast, DE (Germany) uses a period for thousands and a comma for decimals (`1.234,56 €`). |
| **Format Style** | Select the format for displaying the currency in the output: <ul><li>**Region Default** (default) - Retains the format used by the country/region selected for Target Region. For example, the US uses a comma for thousands and a period for decimals (`$1,234.56`). Germany uses a period for thousands and a comma for decimals (`1.234,56 €`).</li><li>**Symbol Prefix** - e.g., `$1,234.56`</li><li>**Symbol Suffix** - e.g., `1,234.56$`</li><li>**Code Prefix** - e.g., `USD 1,234.56`</li><li>**Numeric Only** - e.g., `1234.56`</li></ul> |
| **Decimal Places (0–4)** | Specifies the number of decimal places for the output value. Default is 2. |
| **Convert Currency** | Select to enable currency conversion. |
| **Exchange Rate** | Enter a numeric exchange rate for the source and target for currency conversion. This field is available when Convert Currency is enabled. |

### Supported Data Types

- Input: String
- Output: String

### Examples

#### Example: Standardize for Calculations (No Conversion)

Input: `₹1,23,456.78` (India) → Output: `123456.78`

- **Source Region**: India
- **Format Style**: Numeric Only

#### Example: Convert Currency and Apply Code Prefix

Input: `¥550,000` (Japanese Yen) → Output: `USD 4,125.00`

- **Source Region**: Japan
- **Target Region**: United States
- **Format Style**: Code Prefix (`USD 1,234.56`)
- **Convert Currency**: True (enabled)
- **Exchange Rate**: 156.91

---

## StandardizeDateFormat

This function rule converts a date value from one regional or format standard to another. The source and target formats can each be defined either by region or by a specific format (including custom patterns). The function also automatically interprets two-digit years using an internal century threshold rule.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | The default rule name (`<FieldName>_StandardizeDateFormat`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `PurchaseDate (Date)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeDateFormat` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Use Source Region** | You must define the source date format using either a region or a format. Select this option to specify the source date by region. When not selected, the source is specified by format.<br /><br />When selecting Use Source Region, specify: <ul><li>**Source Region**: Select a source country from the list (for example, United States, United Kingdom, Japan, etc.) The system applies that region's standard date format automatically. When this option is selected, Source Format and Custom Source Pattern cannot be specified.</li></ul>When not selecting Use Source Region, specify: <ul><li>**Source Format**: Defines the input date format. The default value is ISO 8601, but it can be changed to: Short, Medium, Long, Full, Custom Pattern, and Custom Format.</li><li>**Custom Source Pattern**: Enabled only when Custom Format is selected as the Source Format. Allows you to define a custom input date pattern (for example, YYMMDD).</li></ul> |
| **Use Target Region** | You must define the target date format using either a region or a format. Select this option to specify the output date by region. When not selected, the target is specified by format.<br /><br />When selecting Use Target Region, specify: <ul><li>**Target Region**: Select a target country from the list (for example, United States, United Kingdom, Japan, etc.) The system applies that region's standard date format automatically. When this option is selected, Target Format and Custom Target Pattern cannot be specified.</li></ul>When not selecting Use Target Region, specify: <ul><li>**Target Format**: Defines the output date format. The default value is ISO 8601, but it can be changed to: Short, Medium, Long, Full, Custom Pattern, and Custom Format.</li><li>**Custom Target Pattern**: Enabled only when Custom Format is selected as the Target Format. Allows you to define a custom output date pattern (for example, YYYMMDD).</li></ul> |

### Supported Data Types

- Input: Date data types
- Output: Date data types

### Remarks

Does provide pass and fail statistics.

#### Two-Digit Year Handling (Century Rule)

The function internally interprets two-digit years using a Century Threshold value of 30 (not exposed in the UI).

- Years 00–30 → 2000–2030
- Years 31–99 → 1931–1999

Examples: `25` → `2025`, `75` → `1975`

---

## StandardizeTimeFormat

This function rule converts a time value from one regional or format standard to another. The source and target time formats can each be defined either by region or by a specific format (including custom patterns). The function also allows control over time precision, including seconds, milliseconds, and minute-level rounding.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | The default rule name (`<FieldName>_StandardizeTimeFormat`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `PurchaseTime (Time)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeTimeFormat` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Use Source Region** | You must define the source time format using either a region or a format. Select this option to specify the source time format by region. When not selected, the source is specified by format.<br /><br />When selecting Use Source Region, specify: <ul><li>**Source Region**: Select a source country or region from the list (for example, United States, United Kingdom, Japan, etc.) The system applies that region's standard time format automatically. When this option is selected, Source Format and Custom Source Pattern cannot be specified.</li></ul>When not selecting Use Source Region, specify: <ul><li>**Source Format**: Defines the input time format. The default value is 24-Hour, but it can be changed to: 12-Hour, ISO 8601, Custom Pattern, and Custom Format.</li><li>**Custom Source Pattern**: Enabled only when Custom Format is selected as the Source Format. Allows you to define a custom input time pattern (for example, HHmmss, hh:mm a).</li></ul> |
| **Use Target Region** | You must define the target time format using either a region or a format. Select this option to specify the output time by region. When not selected, the target is specified by format.<br /><br />When selecting Use Target Region, specify: <ul><li>**Target Region**: Select a target country from the list (for example, United States, United Kingdom, Japan, etc.) The system applies that region's standard time format automatically. When this option is selected, Target Format and Custom Target Pattern cannot be specified.</li></ul>When not selecting Use Target Region, specify: <ul><li>**Target Format**: Defines the output time format. The default value is 24-Hour, but it can be changed to: 12-Hour, ISO 8601, Custom Pattern, and Custom Format.</li><li>**Custom Target Pattern**: Enabled only when Custom Format is selected as the Target Format. Allows you to define a custom output time pattern (for example, HH:mm:ss.SSS, hh:mm a).</li></ul> |
| **Time Precision** | Defines the overall time precision level to apply: <ul><li>**Minutes** - The time value is rounded to the nearest minute.</li><li>**Seconds** - Seconds are included in the output.</li><li>**Milliseconds** - Milliseconds are included in the output.</li></ul> |

### Supported Data Types

- Input: Time data types
- Output: Time data types

### Remarks

Does provide pass and fail statistics.

---

## StandardizeEmail

This function rule performs various transformations on email addresses to meet requirements for data privacy, system migration, and customer record deduplication. Its core purpose is to ensure email addresses are standardized and compliant by offering capabilities to:

- Mask or hash the email address for pseudonymization (GDPR compliance).
- Replace the email domain, for instance during a company acquisition or rebranding.
- Remove plus addressing aliases (for example, `+campaign`) to aid in record deduplication.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizeEmail`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Email (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeEmail` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Remediation Type** | Select one of the following options: <ul><li>**Mask Username** - Masks the username portion of the email.</li><li>**Replace Domain** - Replaces the email domain with a different one.</li><li>**Hash Username** - Hashes the email for privacy/GDPR (pseudonymization).</li><li>**Remove Plus Addressing** - Removes plus addressing (for example, `+alias`).</li><li>**Validate and Fix** - Validates the email and fixes common format errors.</li></ul> |
| **Mask Pattern** | Available when Mask Username is selected. Select the pattern to use for replacement: <ul><li>**First Character** - Masks all characters in the username except the initial character (for example, `j***@example.com`).</li><li>**Partial** - Masks a partial middle section of the username (for example, `jo**oe@example.com`).</li><li>**Full** - Masks the entire username (for example, `***@example.com`).</li></ul> |
| **Target Domain** | If you wish to create a new email domain to replace the existing domain, enter the name of the new domain. The new domain will be used in the output. Available when Replace Domain is selected. |
| **Hash Algorithm** | Select one of the following options. Available when Hash Username is selected. <ul><li>**SHA256** - Uses the secure SHA-256 hash.</li><li>**MD5** - Uses the MD5 hash.</li></ul> |

### Supported Data Types

- Input: String
- Output: String

### Examples

#### Example: Pseudonymization for Analytics

Input: `john.doe@company.com` → Output: `a7c4b9d1e2f3...@company.com`

- **Remediation Type**: Hash Username
- **Hash Algorithm**: SHA256

#### Example: Email Domain Migration

Input: `employee@oldcompany.com` → Output: `employee@newcompany.com`

- **Remediation Type**: Replace Domain
- **Target Domain**: `newcompany.com`

#### Example: Remove Tracking Aliases

Input: `customer+campaign2024@gmail.com` → Output: `customer@gmail.com`

- **Remediation Type**: Remove Plus Addressing

---

## StandardizePhoneNumber

This function rule changes phone numbers to conform to the format of a particular region and specified pattern. This rule allows you to specify whether to include phone extensions, and whether to include a country code or add one if it's missing from the input data.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizePhoneNumber`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Phone (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizePhoneNumber` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Source Region** | Select a country/region. The format used by the selected region will be applied to the output. Default is United States. |
| **Target Format** | Select a format to apply: <ul><li>**E164** (`+1234567890`) - Applies the E164 International format often required by international communication platforms and APIs.</li><li>**RFC3966** (`tel:+1-234-567-8900`) - Applies the RFC3966 format.</li><li>**National** (`(234) 567-8900`) - Applies the national formatting standard, which does not include a country code in the results unless the country code is explicitly included in the custom format.</li><li>**Plain** (`2345678900`) - Includes digits only, without formatting, symbols, or country codes (if present in the input), which is typically used for basic database storage or internal systems.</li><li>**Custom Pattern** - Enables the option to enter a pattern. If selected, a pattern must be specified in the Custom Target Pattern field.</li></ul> |
| **Custom Target Pattern** | Enter a pattern to apply (for example, `XXX-XXX-XXXX`). Available when Custom Pattern is selected. |
| **Add Country Code** | Select to enable the addition of the country code. Disabled by default. |
| **Default Country Code** | Enter the default country code. Available when Add Country Code is enabled. |
| **Handle Extensions** | Select what to do with phone extensions: <ul><li>**Preserve**: Retains extension with the phone number (for example, `234-567-8900 x123` remains the same).</li><li>**Remove**: Removes extension from the phone number (for example, `234-567-8900 x123` is changed to `234-567-8900`).</li><li>**Separate**: Encloses the extension with brackets (for example, `234-567-8900 x123` is changed to `234-567-8900 [x123]`).</li></ul> |

### Supported Data Types

- Input: String
- Output: String

---

## StandardizePOBox

This rule standardizes the PO Box format by either normalizing various PO Box formats into a single desired style, extracting only the box number, or entirely removing the PO Box reference. This rule can be used for international address standardization.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizePOBox`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `POB (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizePOBox` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Region** | Select a country/region. The format used by the selected region will be applied to the output. Default is United States. |
| **Standardization Type** | Select the type of transformation to apply: <ul><li>**Normalize Format** - Applies the format used by the selected region.</li><li>**Extract Number Only** - Retains only the box number.</li><li>**Remove PO Box** - Removes both the PO Box and the box number.</li></ul> |
| **Target Format** | Select the format to apply. This option is available when Normalize Format is selected for the Standardization Type. <ul><li>**Region Default** - Applies the selected region's standard format (for example, if the region is Canada and the input is "Case Postale 123", the output will be "CP 123" which is the standard Canadian French format).</li><li>**P.O. Box \{number\}** - Applies this format which retains the PO Box number and removes the region. For example, if the input is "Case Postale 123", the output will be "P.O. Box 123".</li><li>**PO Box \{number\}** - Applies this format which retains the PO Box number and removes the region. For example, if the input is "Case Postale 123", the output will be "PO Box 123".</li><li>**Box \{number\}** - Applies this format which retains the PO Box number and removes the region. For example, if the input is "Case Postale 123", the output will be "Box 123".</li></ul> |
| **Replacement Type** | Available when Remove PO Box is selected. **Set to Null** — Replaces removed values with `<null>`. |

### Supported Data Types

- Input: String
- Output: String

---

## StandardizePostalCode

This function rule changes postal codes to conform to a specific region and pattern. It ensures consistent and correct formatting across data sets. This is useful for fixing data issues, such as replacing missing leading zeros that may have been removed by external systems.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizePostalCode`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Zip (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizePostalCode` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Country/Region** | Select a country/region. The format and syntax used by the selected region will be applied to the output. |
| **Format Type** | Select the format to apply to the target output: <ul><li>**Region Default** - Applies the format used by the selected region. For example, if the Country/Region is Canada and the input is "V5H1K1", the output will be changed to "V5H 1K1" (the missing space will be added).</li><li>**5-Digit ZIP** (`12345`) - Retains only the initial five digits and omits everything following them. For example, if the input is "12345-6666", the output will be changed to "12345".</li><li>**ZIP+4** (`12345-6789`) - Retains the initial five digits, a hyphen and four numbers. For example, "12345-6789".</li><li>**Plain (No Formatting)** - Retains alphanumeric values only, without formatting or symbols. For example, if the input is "12345-6789", the output will be changed to "123456789".</li></ul> |
| **Add Leading Zeros** | Select to insert leading zeros. Default is True. Useful if an external system removed leading zeros (e.g., `1234` → `01234`). |

### Supported Data Types

- Input: String
- Output: String

---

## StandardizeState

This function rule changes states in the United States to conform to a specified pattern. This rule allows fuzzy matching, which is useful for correcting misspellings and typos.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>StandardizeState`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `State (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StandardizeState` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Country/Region** | Select the country or region associated with the data. |
| **Format Type** | Select the pattern to apply: <ul><li>**Full Name** (for example, `California`)</li><li>**Abbreviation** (for example, `CA`)</li><li>**ISO Code** (for example, `US-CA`)</li></ul> |
| **Enable Fuzzy Matching** | Select to configure Fuzzy Matching, which returns true if two strings match based on the specified Fuzzy Matching Algorithm and match score filter. This can be useful for correcting misspellings and typos. |
| **Fuzzy Matching Algorithm** | This field is available when Enable Fuzzy Matching is selected. Select from one of the following algorithms: <ul><li>**CONTAINS**: Checks the small string in the long string.</li><li>**DAMERAU–LEVENSHTEIN**: The distance between two strings is the minimum number of operations (insertions, deletions or substitutions of a single character, or transposition of two adjacent characters) required to change one string into another. For more information, see [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance).</li><li>**EXACT MATCH**: Checks two strings for exact match.</li><li>**JARO**: A measure of characters in common, being no more than half the length of the longer string in distance with consideration for transpositions.</li><li>**JARO-WINKLER**: Extends the Jaro algorithm and uses a prefix scale that gives more favorable ratings to strings that match from the beginning for a set prefix length. The prefix length is set to 4 characters. For more information, see [Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance).</li><li>**LEVENSHTEIN**: The distance between two strings is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into another. For more information, see [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).</li><li>**POSITIONAL_QGRAM**: Positional q-grams is an extension to q-grams with an additional property called maxDistance used in calculating the string similarity.</li><li>**QGRAM**: Q-grams (also called n-grams) is the process of breaking up a string into multiple strings each with length n. A q-gram similarity measure between two strings is calculated by counting the number of q-grams in common.</li><li>**SHORTHAND**: Determines if the shorter string is a "shorthand" of the longer (that is, if it can be produced only by deletions). For example, IBM is a shorthand of International Business Machines.</li></ul> |
| **Fuzzy Score Filter** | Enter a decimal value between 0.01 to 1. Default value is 0.7. Comparison score is between 0 to 1. Records with comparison score less than this value are not considered a match for probable duplicates and are discarded. The higher the value, the stricter the matching. This field is available when Enable Fuzzy Matching is selected. |

### Supported Data Types

- Input: String
- Output: String

---

## StringTrim

This function rule trims whitespace from a String field.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_StringTrim`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Address (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StringTrim` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Trim Side** | The side from which to remove white spaces: <ul><li>**Both** (default)</li><li>**Left**</li><li>**Right**</li></ul> |

### Supported Data Types

- Input: String
- Output: String

### Examples

**To convert a string field to another data type and ignore extra whitespace**: Apply the `StringTrim` rule to a string field, and then apply the [StringToConversion](https://testdocs.actian.com/dataconnect/12.5/User/Data_Prep_Rules.htm#ww797761) rule to the output. Without StringTrim, extra whitespace in the field value causes the conversion rule to fail.

**To determine distinct values in a string field and ignore whitespace**: Apply the `StringTrim` rule to a string field, then apply the `CompareToConstant` rule to the output. Without StringTrim, varying amounts of extra whitespace are considered distinct values.
