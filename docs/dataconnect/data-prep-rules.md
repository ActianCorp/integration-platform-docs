---
title: Data Prep Rules
toc_max_heading_level: 2
---

# Data Prep Rules

Data preparation is the process of converting raw data into a clean, consistent, and structured format that is suitable for analysis. This process involves several key steps, including data cleaning to remove errors and inconsistencies, as well as data transformation.

These rules create new in-memory fields (see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm)), which can then be used for further processing or to build additional rules. It also involves data engineering tasks such as adding new columns to enrich the dataset, deleting unnecessary columns to improve efficiency, and renaming columns for improved clarity and consistency.

They generate pass and fail statistics based on conversion success or failure, and they create derived fields of the converted type.

See [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm#ww1423441) for information about adding rules.

The following is a list of data preparation rules:

| Rule Name | Description |
| :--- | :--- |
| [DataTypeConversion](#datatypeconversion) | Converts a non-string field into a specified data type. It creates a new in-memory field. |
| [ExecuteExpression](#executeexpression) | Executes the specified expression on the field. This is useful for complex transformations. |
| [LookupValue](#lookupvalue) | Looks up a value from a dataset, based on the specified keys. |
| [MathTransform](#mathtransform) | Applies a mathematical transformation to a numeric field. It creates a new in-memory field. |
| [ParseExtract](#parseextract) | Parses and extracts parts from a structured or composite field value (such as a URI, Email, Full Name, Address, or Timestamp). |
| [StringJoin](#stringjoin) | Combines multiple fields into a single value, based on a specified delimiter. |
| [StringSplit](#stringsplit) | Splits a string value in a field into separate substrings based on a specified delimiter. |
| [StringToConversion](#stringtoconversion) | Converts a string field to a specified data type. It creates a new in-memory derived field. |

---

## DataTypeConversion

This function rule changes a data type into a new, specified data type.

A derived field is stored in-memory (RAM). The derived fields are available in-memory and can be used for further profiling and analysis. Users can also include the derived field values with profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

This rule serves several purposes:

- **Consistency for Analysis**: It ensures that data is in a uniform format, making it possible to accurately group information together — for instance, changing detailed time-and-date stamps so you can consistently group all records by just the day.
- **Readability**: It converts technical data types into plain, easily readable strings so that user-facing reports are clear for non-technical audiences.
- **System Stability and Scalability**: It prevents technical errors, such as those caused by numbers getting too large for the system to handle (integer overflow), which supports the system's ability to grow.
- **Data Integrity**: It helps maintain the quality and accuracy of your information.

Note that when changing data types, some information may be lost:

- **Loss of Precision**: If you convert a high-detail number (like one with many decimal places, such as a `Numeric` or `Double` type) into a simpler whole number (`Int` or `Long`), the decimal part of the number will be removed or rounded off.
- **Loss of Date/Time Detail**: If you take a combined date and time (a `TimeStamp`) and convert it to just a Date or just a Time, the part you discard (the time of day or the date itself) is permanently erased from the data, which may affect later analysis.
- **Handling Unconvertible Values**: If a field contains a value that cannot be logically converted to the new type (for example, trying to turn the text `N/A` into a number), the rule will typically fail to process that specific value. The system will not crash; instead, the resulting field value for that record will be set to NULL (a missing value indicator).

This rule does not convert a string data type. To convert a string data type, use the [StringToConversion](#stringtoconversion) rule.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Date (Date)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `DataTypeConversion` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Source Type** | The source field data type. |
| **Convert to** | Select the data type to convert the source data into for the in-memory derived field.<br />**Note**: The dropdown menu only presents options which the Source Type can be logically converted to. For example, if the Source Type is **Numeric**, then you can convert to **Boolean**, **Double**, **Float**, **Integer**, **Long**, or **String**. If the Source Type is **Date** or **Time**, then you can only convert to **String**.<br /><br />Options for all source data types are: <ul><li>**String** (Text)</li><li>**Int** (32-bit integer)</li><li>**Long** (64-bit integer)</li><li>**Double** (Double-precision floating point)</li><li>**Float** (Single-precision floating point)</li><li>**Numeric** (High-precision decimal: 38 digits, 18 decimal places)</li><li>**Boolean** (True/false)</li><li>**Date** (Calendar date)</li><li>**Time** (Time of day)</li><li>**TimeStamp** (Date and time combined)</li></ul> |
| **Format** | (Optional) Select a format to apply to the converted data. Format options depend on the source data type.<br />**Note**: When converting from **Double**, **Float**, **Integer**, **Long**, and **Numeric** data types, there are no formats to specify.<br /><br />The **Boolean** data type can be converted to String or Integer with the following formats: <ul><li>True.False</li><li>Yes.No</li><li>1.0</li><li>T.F</li></ul>The **Date** data type can be converted to String with the following formats: <ul><li>yyyy-M-dd</li><li>yyyy-MM-dd</li><li>MM/dd/yy</li><li>M/dd/yyyy</li><li>MM/dd/yyyy</li><li>M-dd-yyyy</li><li>MM-dd-yyyy</li><li>MMM-yy</li><li>MMM dd, yyyy</li></ul>The **Time** data type can be converted to String with the following formats: <ul><li>HH:mm:ss</li><li>HH:mm</li><li>hh:mm:ss</li><li>hh:mm aa</li></ul>The **TimeStamp** data type can be converted to String, Date, or Time with the following formats:<br /><br />String formats: <ul><li>yyyy-MM-dd HH:mm:ss</li><li>MM/dd/yyyy HH:mm</li><li>MMM dd, yyyy HH:mm aa</li><li>EEE, dd MMM yyyy HH:mm:ss Z</li></ul>Date formats: <ul><li>yyyy-M-dd</li><li>yyyy-MM-dd</li><li>MM/dd/yy</li><li>M/dd/yyyy</li><li>MM/dd/yyyy</li></ul>Time formats: <ul><li>HH:mm:ss</li><li>HH:mm</li><li>hh:mm:ss</li><li>hh:mm aa</li></ul>**Note**: If you are converting string-based temporal data (like dates and times) into a true **Date**, **Time**, or **TimeStamp**, the Format parameter is required. If the input string does not adhere to a default, recognized ISO standard (for example, `yyyy-MM-dd`), the conversion will fail without specifying the exact pattern in the Format parameter. |
| **Timezone** | (Optional) Select a Timezone identifier (for example, `UTC`, `America/New_York`, `Europe/London`). This parameter is typically used for timestamp conversions that require timezone adjustments. Visible when the Source Type is a **Time** or **TimeStamp** data type.<br />**Tip**: When converting timestamps, if the Timezone parameter is omitted, the system will use a default time zone, typically UTC or the server's local time zone. If you intend to localize or accurately compare timestamps across different geographic regions, you must explicitly specify the Timezone. |
| **Derived Field Name** | A default derived field name (`d_<SourceDataType>Derived_DataTypeConversion`, where `<SourceDataType>` is the data type of the source) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |

### Supported Data Types

- Input: Int, Long, Double, Float, Numeric, Boolean, DateTime, TimeStamp
- Output: String, Int, Long, Double, Float, Numeric, Boolean, DateTime, TimeStamp

### Examples

#### Example: Timestamp to Date Conversion (Data Aggregation)

**Use Case**: This conversion retains the date and removes the time from a timestamp. Typically used for daily sales aggregation — transactions are grouped by calendar day for generating daily reports, performing trend analysis, and populating business intelligence dashboards without needing time-of-day granularity.

To change the input value `2025-01-15 14:30:45` (TimeStamp) to the output value `2025-01-15` (Date), parameters can be set as follows:

- Field Type: Date

#### Example: Numeric Type Conversion (Data Migration)

**Use Case**: This conversion is used to convert integer IDs to a longer data type, such as Long, to support larger datasets. This prevents integer overflow during system scalability, supports growing databases, and ensures data integrity when platform migrations or expansions occur.

To change the input value `2147483647` (Int — the max 32-bit value) to the output value `2147483647` (Long), parameters can be set as follows:

- Field Type: Long

#### Example: Boolean to String Conversion (User Interface)

**Use Case**: This conversion changes Boolean flags to text for inclusion in customer-facing reports. This improves report readability for non-technical users, enhances customer communication, and maintains consistent terminology across various business documentation.

To change the input value `true` (Boolean) to the output value `yes` (String), parameters can be set as follows:

- Field Type: String
- Format: `yes.no`

### Remarks

Does not provide pass and fail statistics.

---

## ExecuteExpression

This function rule executes the specified expression on the field. This is useful for complex transformations.

A derived field is stored in-memory (RAM). The derived fields are available in-memory and can be used for further profiling and analysis. Users can also include the derived field values with profile output fields. For more information, see Derived Fields.

Once the Execute Expression rule has been added to a profile, it will be categorized under `-MultiFieldRules-` on the Rules tab, instead of under the `-OutputFields-`.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | `-MultipleFields-` is displayed here. |
| **Rule Type** | The type of rule that is applied to the field. That is `ExecuteExpression` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Script** | The Script text box helps you construct expressions for Derived Fields. Click **Build** to open the Expression Builder dialog to assist you in building the SQL script.<br /><br />For example, to add multiple regular expressions use the `RLIKE` operator:<br /><br /><pre><code>{`CASE\n  WHEN field RLIKE 'pattern1' THEN true\n  WHEN field RLIKE 'pattern2' THEN true\n  WHEN field RLIKE 'pattern3' THEN true\n  ELSE false\nEND`}</code></pre>See [Using the Expression Builder](https://testdocs.actian.com/dataconnect/12.5/User/Using_the_Expression_Builder.htm). |
| **Derived Field Name** | A default derived field name (`d_ExecuteExpression`, `d_ExecuteExpression_n` where `n` is 1, 2, 3, and so on) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |

### Supported Data Types

- Input: String, Date, Time, Timestamp, Boolean, Numeric, Double, Float, Long, Integer

### Using the Expression Builder

The Expression Builder dialog helps you construct expressions for Derived Fields. This dialog provides the fields, operators, and functions you can use to build SQL scripts in Apache Spark.

To open the Expression Builder dialog, click **Build**. In the displayed dialog, select the required field and double-click.

The following elements are available in the dialog:

| Screen Element | Description |
| :--- | :--- |
| **(1) Script editor** | The script editor displays the expression that is built. You can insert the elements from the element tree or type in the editor. |
| **(2) Search** | Enter a keyword in the Search box to find and display matching fields or functions in the Search Results pane. Click on the required function and the description for the function is displayed. When you are typing a search keyword, an **X** appears at the end of the search box, which can be clicked to clear the box. |
| **(3) Element tree** | The left pane provides the Field references, Functions, and Conditional constructs that can be used to build an expression. Click on the required element and the description is displayed in the Details pane. To insert an element, double-click the element or select the element and click **OK**. The following elements are listed in the form of a tree structure: <ul><li>**Field references**: Provides a list of input fields that can be referenced in the expression.</li><li>**Functions**: Provides a list of functions available to the expression language, organized by category. To see the description of a function, select it. After a function is inserted into the expression, you must replace its argument names with appropriate values. See [Conversion Functions](https://testdocs.actian.com/dataconnect/12.5/User/Conversion_Functions.htm), [Date And Time Functions](https://testdocs.actian.com/dataconnect/12.5/User/Date_and_Time_Functions.htm), [Math Functions](https://testdocs.actian.com/dataconnect/12.5/User/Math_Functions.htm), [String Functions](https://testdocs.actian.com/dataconnect/12.5/User/String_Functions.htm), [Aggregate Functions](https://testdocs.actian.com/dataconnect/12.5/User/Aggregate_Functions.htm), [Window Functions](https://testdocs.actian.com/dataconnect/12.5/User/Window_Functions.htm).</li><li>**Conditional constructs**: Conditional constructs are programming structures that allow you to control the flow of a program by making decisions based on conditions. See [Conditional Constructs](https://testdocs.actian.com/dataconnect/12.5/User/Conditional_Constructs.htm).</li></ul> |
| **(4) Details pane** | Displays the details of the selected function or element. |
| **(5) Operators** | Click to view a list of operators supported by expression language. The operators are organized by category. See [Operators](#operators). |
| **(6) Validation button** | Click to check the validity of the expression and report any existing errors. |

### Operators

There are several types of operators that you can use in your expressions or scripts, including:

- **Arithmetic**: Used to perform basic mathematical operations.
- **Comparison or Relational**: Used to compare two values or expressions. They return a boolean result (True or False) based on whether the comparison is true or false.
- **Logical**: Used to combine or modify boolean values (True or False), assignment, and more.

The following table lists the available operators:

| Operator | Description |
| :--- | :--- |
| `(` | Open bracket. Open and closed brackets are used to group expressions. They are not specific operators but are frequently used in conjunction with conditional operators or mathematical expressions.<br />Example: `a + (b * c)` |
| `)` | Close bracket. Open and closed brackets are used to group expressions. They are not specific operators but are frequently used in conjunction with conditional operators or mathematical expressions.<br />Example: `((a > b) and (c < d))` |
| `*` | Arithmetic operator for multiplication. Multiplies two values together. |
| `+` | Arithmetic operator for addition. Adds two values together. |
| `-` | Arithmetic operator for subtraction. Subtracts one value from another. |
| `/` | Arithmetic operator for division. Divides one value by another. |
| `%` | Relational "remainder" operator. Returns the remainder of a division operation. |
| `!=` | Relational "not equal to" operator. Checks if two values or expressions are not equal. |
| `\|\|` | String concatenation operator. |
| `<` | Relational "less than" operator. Checks if the value on the left is less than the value on the right. |
| `<=` | Relational "less than or equal to" operator. Checks if the value on the left is less than or equal to the value on the right. |
| `<>` | Relational "not equal to" operator. Checks if two values or expressions are not equal (an alternative to `!=`). |
| `=` | Relational "equal to" operator. Checks if two values or expressions are equal. |
| `>` | Relational "greater than" operator. Checks if the value on the left is greater than the value on the right. |
| `>=` | Relational "greater than or equal to" operator. Checks if the value on the left is greater than or equal to the value on the right. |
| `AND` | Logical "and" operator. Returns True if both operands (conditions) are True. Otherwise, it returns False. |
| `BETWEEN` | Tests if a value is within a given range, inclusive. |
| `CASE` | Begins conditional expression. |
| `CAST` | Type conversion function. |
| `ELSE` | Default result when no conditions match. |
| `END` | Ends CASE expression. |
| `EXISTS` | Tests for the existence of a set of values. |
| `ILIKE` | Case-insensitive matching. |
| `IN` | Tests if a value is equal to any value in a list. |
| `IS NOT NULL` | Tests "is not null". Checks if a field value or result of expression is any value other than null. |
| `IS NULL` | Tests "is null". Checks if a field value or result of expression is null. |
| `LIKE` | Logical "like" operator. Compares two string expressions. If the expressions match, result is True. If there is no match, result is False. |
| `NOT` | Negates a boolean expression. |
| `NOT IN` | Tests if a value is not equal to any value in a list. |
| `OR` | Logical "or" operator. Returns True if at least one of the operands (conditions) is True. Returns False if both operands are False. |
| `RLIKE` | Tests if a string matches a regular expression. |
| `THEN` | Result when condition is true. |
| `WHEN` | Condition in CASE expression. |

### Conversion Functions

The conversions category provides a set of functions for converting the data type of input fields into a different data type in Apache Spark.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `bigint` | Format: `bigint(field)`<br /><br />Converts a field with a numeric type into a bigint (long) type.<br /><br />This function is useful, for example, for handling unique identifiers (IDs) and aggregate counts that exceed 2.1 billion. | `field`: Name of the field to be converted. |
| `boolean` | Format: `boolean(field)`<br /><br />Converts an integer field into a boolean type based on specific integer values representing true and false. If the integer value of the field matches the truth value, it will return true. If it matches the falsity value, it will return false. Any other value (unmapped values) will result in null.<br /><br />This function is useful, for example, for converting status codes (for example, `1` for true, `0` for false) or text (for example, `YES`, `NO`) into a true/false value for conditional logic. | `field`: Name of the field to be converted. |
| `cast` | Format: `cast(field AS dataType)`<br /><br />Converts a field to the specified data type.<br /><br />This function is useful, for example, for standardizing data types before profiling. For example, if a dataset contains a column representing employee ages that was accidentally imported as a STRING, you would use the cast function to convert it to an INT or BIGINT. This conversion is necessary to perform mathematical operations (like calculating the average age or identifying ranges) that are essential for accurate data profiling and analysis. | <ul><li>`field`: Name of the field to be converted.</li><li>`dataType`: The target type, which can be one of: STRING, INT, BIGINT, DOUBLE, FLOAT, BOOLEAN, DATE, TIMESTAMP, DECIMAL, or BINARY.</li></ul> |
| `cast_as_bigint` | Format: `cast(field AS BIGINT)`<br /><br />Converts a string or numeric field to bigint (long).<br /><br />This function is useful, for example, when you need to explicitly change a field's type to a large whole number. | `field`: Name of the field to be converted. |
| `cast_as_boolean` | Format: `cast(field AS BOOLEAN)`<br /><br />Converts a string or numeric field to boolean.<br /><br />This function is useful, for example, when you need to explicitly change a field's type to a true/false value. | `field`: Name of the field to be converted. |
| `cast_as_decimal` | Format: `cast(field AS DECIMAL(precision, scale))`<br /><br />Converts a field to decimal.<br /><br />This function is useful, for example, when handling currency or financial data where you need exact precision (for example, 10 digits total with 2 after the decimal) to avoid rounding errors. | `field`: Name of the field to be converted. |
| `cast_as_double` | Format: `cast(field AS DOUBLE)`<br /><br />Converts a string or numeric field to double.<br /><br />This function is useful, for example, when you need a numeric value with high-precision floating-point arithmetic for scientific or complex non-financial calculations. | `field`: Name of the field to be converted. |
| `cast_as_float` | Format: `cast(field AS FLOAT)`<br /><br />Converts a string or numeric field to float.<br /><br />This function is useful, for example, when converting a field to a single-precision floating-point number, typically for simpler decimal values where space efficiency is important. | `field`: Name of the field to be converted. |
| `cast_as_int` | Format: `cast(field AS INT)`<br /><br />Converts a string or numeric field to int.<br /><br />This function is useful, for example, when converting text-based or decimal numbers into standard whole numbers (integers) for counting or grouping, discarding any fractional part. | `field`: Name of the field to be converted. |
| `cast_as_string` | Format: `cast(field AS STRING)`<br /><br />Converts a field to string.<br /><br />This function is useful, for example, when you need to combine a number or date with other text, or output data for human-readable reports or log files. | `field`: Name of the field to be converted. |
| `date` | Format: `date(field)`<br /><br />Removes the date part from a timestamp field, leaving only the time part.<br /><br />This function is useful, for example, when you only need the time portion for comparison, grouping, or filtering, and you want to disregard the date. | `field`: Name of the field to be converted. |
| `date_format` | Format: `date_format(field, format)`<br /><br />Removes the time part from a timestamp field, leaving only the date.<br /><br />This function is useful, for example, when you need to represent a date or timestamp in a specific custom format (for example, `YYYY-MM-DD` or `HH:mm:ss`) for display or integration. | <ul><li>`field`: Name of the field to be converted.</li><li>`format`: The pattern for the date.</li></ul> |
| `decimal` | Format: `decimal(field, precision, scale)`<br /><br />Converts a field to decimal.<br /><br />This function is useful, for example, when you need an explicit function call (rather than the `CAST` syntax) to define the exact precision and scale of a financial or critical numeric field. | <ul><li>`field`: Name of the field to be converted.</li><li>`precision`: (Optional) The number of digits.</li><li>`scale`: (Optional) The number of digits to include to the right of the decimal point.</li></ul> |
| `double` | Format: `double(field)`<br /><br />Converts a field to double.<br /><br />This function is useful, for example, when converting a raw data field to a high-precision decimal number outside of the standard `CAST` syntax. | `field`: Name of the field to be converted. |
| `float` | Format: `float(field)`<br /><br />Converts a field into a float type.<br /><br />This function is useful, for example, when converting a raw data field to a single-precision floating-point number outside of the standard `CAST` syntax. | `field`: Name of the field to be converted. |
| `format_number` | Format: `format_number(field, decimalPlaces)`<br /><br />Formats a numeric field as string with specified decimal places.<br /><br />This function is useful, for example, when preparing a numeric result (like a dollar amount) for presentation, ensuring a fixed number of decimal points and applying standard formatting (for example, thousand separators). | <ul><li>`field`: Name of the field to be converted.</li><li>`decimalPlaces`: Number of decimal places.</li></ul> |
| `format_string` | Format: `format_string(format, args...)`<br /><br />Returns formatted string using printf-style format strings.<br /><br />This function is useful, for example, when dynamically constructing complex strings by inserting multiple variable values into a template (like generating a structured message or URL). | <ul><li>`format`: The printf-style format string.</li><li>`args`: Arguments to format.</li></ul> |
| `from_unixtime` | Format: `from_unixtime(unixTime, format)`<br /><br />Converts Unix timestamp (seconds) to formatted date string.<br /><br />This function is useful, for example, when raw log or event data contains time as a numeric timestamp and you need to convert it into a human-readable date and time string. | <ul><li>`unixTime`: Name of the field to be converted.</li><li>`format`: The date and time pattern to apply.</li></ul> |
| `int` | Format: `int(field)`<br /><br />Converts a field into an integer type. This conversion can lead to a loss of precision if the number is too large or too small to be represented as an integer.<br /><br />This function is useful, for example, when converting numeric fields (for example, age, count) that are currently strings or decimals into a standard whole number, without needing the massive size of a bigint. | `field`: Name of the field to be converted. |
| `to_date` | Format: `to_date(field, format)`<br /><br />Converts a string to date, optionally with format.<br /><br />This function is useful, for example, when a date is stored as a custom-formatted text string (for example, `DD/MM/YYYY`) and needs to be treated as an actual date type for sorting or analysis. | <ul><li>`field`: Name of the field to be converted.</li><li>`format`: (Optional) The date pattern to apply.</li></ul> |
| `to_timestamp` | Format: `to_timestamp(field, format)`<br /><br />Converts a string field to a timestamp field.<br /><br />This function is useful, for example, when you have a string that contains both date and time (for example, `2024-06-15 14:30:00`) and need to treat it as a full time-series data point. | <ul><li>`field`: Name of the field to be converted.</li><li>`format`: (Optional) The time pattern to apply.</li></ul> |
| `unix_timestamp` | Format: `unix_timestamp(field, format)`<br /><br />Converts a string field to Unix timestamp (seconds since epoch).<br /><br />This function is useful, for example, when converting a human-readable date/time string into a simple numeric format for easier calculation or comparison of time intervals. | <ul><li>`field`: Name of the field to be converted.</li><li>`format`: (Optional) The pattern to apply.</li></ul> |

### Date And Time Functions

The date and time category provides functions for dealing with date, time, and timestamp values. Unless specifically indicated otherwise, these functions accept values of any of the date and time types. If no time zone is supplied to functions taking an optional time zone argument, the default time zone as indicated by the JVM will be used.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `add_months` | Format: `add_months(startDate, numMonths)`<br /><br />Adds the specified number of months to a date. | <ul><li>`startDate`: The date field.</li><li>`numMonths`: Number of months to add.</li></ul> |
| `current_date()` | Format: `current_date()`<br /><br />Returns the current date in Spark SQL. | None |
| `current_timestamp()` | Format: `current_timestamp()`<br /><br />Returns the current timestamp in Spark SQL. | None |
| `date_add` | Format: `date_add(startDate, numDays)`<br /><br />Adds the specified number of days to a date. | <ul><li>`startDate`: The date field.</li><li>`numDays`: Number of days to add.</li></ul> |
| `date_sub` | Format: `date_sub(startDate, numDays)`<br /><br />Subtracts the specified number of days from a date. | <ul><li>`startDate`: The date field.</li><li>`numDays`: Number of days to subtract.</li></ul> |
| `datediff` | Format: `datediff(endDate, startDate)`<br /><br />Returns the number of days between two dates. | <ul><li>`endDate`: The end date field.</li><li>`startDate`: The start date field.</li></ul> |
| `day` | Format: `day(field)`<br /><br />Extracts the day of the month from a date/timestamp field. | `field`: The date or timestamp field. |
| `dayofweek` | Format: `dayofweek(field)`<br /><br />Extracts the day of the week (where 1=Sunday and 7=Saturday). | `field`: The date or timestamp field. |
| `from_utc_timestamp` | Format: `from_utc_timestamp(field, timezone)`<br /><br />Converts a field in UTC to the specified timezone. | <ul><li>`field`: The timestamp field in UTC.</li><li>`timezone`: The target timezone (for example, `PST`, `America/Los_Angeles`).</li></ul> |
| `hour` | Format: `hour(field)`<br /><br />Extracts the hour from a timestamp field. | `field`: The timestamp field. |
| `minute` | Format: `minute(field)`<br /><br />Extracts the minute from a timestamp field. | `field`: The timestamp field. |
| `month` | Format: `month(field)`<br /><br />Extracts the month from a date/timestamp field. | `field`: The date or timestamp field. |
| `months_between` | Format: `months_between(endDate, startDate)`<br /><br />Returns the number of months between two dates. | <ul><li>`endDate`: The end date field.</li><li>`startDate`: The start date field.</li></ul> |
| `now` | Format: `now()`<br /><br />Returns the current timestamp (this is an alias for `current_timestamp`). | None |
| `second` | Format: `second(field)`<br /><br />Extracts the seconds from a timestamp field. | `field`: The timestamp field. |
| `to_utc_timestamp` | Format: `to_utc_timestamp(field, timezone)`<br /><br />Converts the timestamp from the specified timezone to UTC. | <ul><li>`field`: The timestamp field.</li><li>`timezone`: The source timezone.</li></ul> |
| `unix_timestamp` | Format: `unix_timestamp(field, format)`<br /><br />Converts the date/timestamp to Unix (seconds since epoch). | <ul><li>`field`: The timestamp field or string.</li><li>`format`: (Optional) Date format pattern.</li></ul> |
| `weekofyear` | Format: `weekofyear(field)`<br /><br />Extracts the week of a year from a date/timestamp field. | `field`: The date or timestamp field. |
| `year` | Format: `year(field)`<br /><br />Extracts the year from a date/timestamp field. | `field`: The date or timestamp field. |

### Math Functions

The Math category provides implementations of common math functions. Trigonometric functions use radians by default.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `abs` | Format: `abs(field)`<br /><br />Returns the absolute value of the given numeric field, which is simply the number without a negative sign.<br /><br />The number can be an int, long, float, or a double. If the argument is NaN, the result is NaN. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `ceil` | Format: `ceil(field)`<br /><br />Returns the smallest integer that is not smaller than the value. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `cos` | Format: `cos(field)`<br /><br />Returns the cosine of the given field (input must be in radians). | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `exp` | Format: `exp(field)`<br /><br />Returns the mathematical constant e raised to the power of the given field. If the argument is NaN, the result is NaN. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `floor` | Format: `floor(field)`<br /><br />Returns the largest integer that is not greater than the value. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `ln` | Format: `ln(field)`<br /><br />Returns the natural logarithm of the given field. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `log` | Format: `log(field)`<br /><br />Returns the logarithm of the field using the specified base.<br /><br />For example, if you have a field called `num` in a record, and it contains `7.389`, `log(num)` will evaluate to `log(7.389)` returning `2`, because e raised to the power of 2 is about 7.389.<br /><br />If the argument is NaN or less than zero, the result is NaN. | `field`: A numeric field. |
| `log2` | Format: `log2(field)`<br /><br />Returns the base 2 logarithm of the given field. | `field`: A numeric field. |
| `log10` | Format: `log10(field)`<br /><br />Returns the base 10 logarithm of the given field. This determines the power to which 10 must be raised to equal the field number. If the argument is NaN or less than zero, the result is NaN. | `field`: A numeric field. |
| `pow` | Format: `pow(base, exponent)`<br /><br />Returns the base value raised to the power of the exponent. | <ul><li>`base`: Base value.</li><li>`exponent`: Exponent value.</li></ul> |
| `rand` | Format: `rand(seed)`<br /><br />Returns a random floating-point value between 0 and 1. The value is generated using a pseudorandom number generator (based on an algorithm). | `seed`: (Optional) Random seed. |
| `round` | Format: `round(field, scale)`<br /><br />Returns the field value rounded to the specified number of decimal places.<br /><br />If the argument is NaN, the result is 0. Returns a Long if the argument is a Double and an Integer if the argument is a Float. | <ul><li>`field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used.</li><li>`scale`: (Optional) Number of decimal places. The default is 0.</li></ul> |
| `sin` | Format: `sin(field)`<br /><br />Returns the sine of the given field (input must be in radians).<br /><br />Sine is a mathematical function that takes an angle (in radians) and returns the sine value of that angle. For example, for a field value of `1.0` (approximately 57.3 degrees), `sin` returns approximately `0.841`. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `sqrt` | Format: `sqrt(field)`<br /><br />Returns the square root of the given field. | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |
| `tan` | Format: `tan(field)`<br /><br />Returns the tangent of the given field (input must be in radians). | `field`: A numeric field. Alternatively, an expression (such as another function or an expression that evaluates to a number) can also be used. |

### String Functions

The String category provides common String manipulation functions.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `concat` | Format: `concat(field1, field2, ...)`<br /><br />Joins the string values of two or more input fields together. | <ul><li>`field1`: The first string field or constant.</li><li>`field2`: The second string field or constant.</li><li>Additional fields: Include as many string fields or constants as needed.</li></ul> |
| `concat_ws` | Format: `concat_ws(separator, field1, field2, ...)`<br /><br />Joins multiple strings together, separated by a specified delimiter. | <ul><li>`separator`: The string to use as a delimiter between fields.</li><li>`field1`: The first string field.</li><li>Additional fields: Include as many string fields as needed.</li></ul> |
| `initcap` | Format: `initcap(field)`<br /><br />Capitalizes the first letter of every word in the string field. | `field`: The string field to capitalize. |
| `instr` | Format: `instr(field, substring)`<br /><br />Returns the 1-based index of the first time a specific substring appears within a string field. | <ul><li>`field`: The string to search within.</li><li>`substring`: The specific substring to locate.</li></ul> |
| `length` | Format: `length(field)`<br /><br />Returns the number of characters in the string value. | `field`: The string field to measure. |
| `locate` | Format: `locate(substring, field, position)`<br /><br />Returns the 1-based index of a substring within a string, optionally starting the search from a specific position. | <ul><li>`substring`: The specific substring to locate.</li><li>`field`: The string to search within.</li><li>`position`: (Optional) The starting position for the search. The default is 1.</li></ul> |
| `lower` | Format: `lower(field)`<br /><br />Converts all alphabetical characters in the string to lowercase. | `field`: The string field to convert. |
| `lpad` | Format: `lpad(field, length, pad)`<br /><br />Adds characters to the left side of a string until it reaches a specified total length. | <ul><li>`field`: The string field to pad.</li><li>`length`: The final target length of the string.</li><li>`pad`: The string used for padding (for example, `0` or ` `).</li></ul> |
| `ltrim` | Format: `ltrim(field)`<br /><br />Removes leading whitespace characters from the beginning (left side) of the string. | `field`: The string field to trim. |
| `regexp_extract` | Format: `regexp_extract(field, pattern, groupIdx)`<br /><br />Extracts the part of the string that matches a specified capture group from a regular expression pattern. | <ul><li>`field`: The string field to search within.</li><li>`pattern`: The Java regular expression to use for matching.</li><li>`groupIdx`: The index of the capture group to extract (0 returns the entire match).</li></ul> |
| `regexp_replace` | Format: `regexp_replace(field, pattern, replacement)`<br /><br />Replaces all occurrences of substrings that match a regular expression pattern with a specified replacement string. | <ul><li>`field`: The string field to modify.</li><li>`pattern`: The Java regular expression to search for.</li><li>`replacement`: The string to substitute for all matches.</li></ul> |
| `replace` | Format: `replace(field, search, replace)`<br /><br />Replaces all non-regex occurrences of a specific search string within a field with a new replacement string. | <ul><li>`field`: The string field to modify.</li><li>`search`: The exact string to find and replace.</li><li>`replace`: The string to substitute for all occurrences of the search string.</li></ul> |
| `rpad` | Format: `rpad(field, length, pad)`<br /><br />Adds characters to the right side of a string until it reaches a specified total length. | <ul><li>`field`: The string field to pad.</li><li>`length`: The final target length of the string.</li><li>`pad`: The string used for padding (for example, `0` or ` `).</li></ul> |
| `rtrim` | Format: `rtrim(field)`<br /><br />Removes trailing whitespace characters from the end (right side) of the string. | `field`: The string field to trim. |
| `split` | Format: `split(field, pattern, limit)`<br /><br />Divides a string into an array of strings based on a delimiter pattern. | <ul><li>`field`: The string field to be split.</li><li>`pattern`: The regular expression delimiter.</li><li>`limit`: (Optional) The maximum number of resulting array elements.</li></ul> |
| `substring` | Format: `substring(field, startPos, length)`<br /><br />Returns a segment of the input string, starting at a specific position and continuing for a defined length. | <ul><li>`field`: The input string field.</li><li>`startPos`: The 1-based position where the extraction should begin.</li><li>`length`: The number of characters to extract.</li></ul> |
| `trim` | Format: `trim(field)`<br /><br />Removes leading and trailing whitespace characters from both ends of the string. | `field`: The string field to trim. |
| `upper` | Format: `upper(field)`<br /><br />Converts all alphabetical characters in the string to uppercase. | `field`: The string field to convert. |

### Aggregate Functions

The Aggregate category has functions that perform calculations.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `avg` | Format: `avg(field)`<br /><br />This function calculates and returns the average of the values in the specified field. | `field`: The numeric field to calculate the average of. |
| `count` | Format: `count(field)`<br /><br />This function counts and returns the total number of rows in the specified field or group. | `field`: The numeric field to count. |
| `sum` | Format: `sum(field)`<br /><br />This function calculates and returns the sum of values in the specified field. | `field`: The numeric field to calculate the sum of. |

### Window Functions

The Window category has the following functions.

| Function | Description | Parameters |
| :--- | :--- | :--- |
| `lag` | Format: `lag(field, offset) OVER (PARTITION BY ... ORDER BY ...)`<br /><br />This function returns the value x number of rows before the current row (where x is the offset). | <ul><li>`field`: The field to either return the value of, or to base the offset on (if an offset is specified).</li><li>`offset`: (Optional) Number of rows back. The default is 1.</li></ul> |
| `rank` | Format: `rank() OVER (PARTITION BY ... ORDER BY ...)`<br /><br />Used with the OVER clause, this function assigns a rank to each row within a partition (with gaps for ties). | None |
| `row_number` | Format: `row_number() OVER (PARTITION BY ... ORDER BY ...)`<br /><br />Used with the OVER clause, this function assigns a unique sequential integer to each row within a partition. | None |

### Conditional Constructs

The Conditional category has constructs that help you pick values based on certain conditions.

| Construct | Description | Parameters |
| :--- | :--- | :--- |
| `case when then else end` | Format: `case when then else end`<br /><br />Builds a conditional expression that evaluates to one of many possible values, functioning similarly to a switch or case statement.<br /><br />If the condition is not met, the specified `defaultValue` is returned. | <ul><li>`baseExpression`: (Optional) A field or expression to evaluate.</li><li>`condition`: If a `baseExpression` is used, the condition checks if the expression equals a certain value. If no `baseExpression` is used, you can name the field and use any assignment (for example, `Hr < 12`).</li><li>`defaultValue`: A field or expression to return as default if no case is met.</li></ul> |
| `case when then end` | Format: `case when then end`<br /><br />Builds a conditional expression that evaluates to one of many possible values, functioning similarly to a switch or case statement.<br /><br />If the condition is not met, a null value is returned. | <ul><li>`baseExpression`: (Optional) A field or expression to evaluate.</li><li>`condition`: If a `baseExpression` is used, the condition checks if the expression equals a certain value. If no `baseExpression` is used, you can name the field and use any assignment (for example, `Hr < 12`).</li></ul> |
| `coalesce` | Format: `coalesce(field1, field2, ...)`<br /><br />Returns the first non-null value from a list of fields/values. | <ul><li>`field1`: The first field or value to check.</li><li>`field2`: The alternative field or value.</li><li>Additional fields as needed.</li></ul> |
| `if` | Format: `if(condition, trueValue, falseValue)`<br /><br />Returns the `trueValue` if the condition is true, otherwise it returns the `falseValue`. | <ul><li>`condition`: The boolean expression to be tested.</li><li>`trueValue`: The value to be returned when condition is true.</li><li>`falseValue`: The value to be returned when condition is false.</li></ul> |
| `nvl` | Format: `nvl(field, replacementValue)`<br /><br />Returns the replacement value if the field is null. | <ul><li>`field`: The field or expression.</li><li>`replacementValue`: The replacement value (which must be the same data type as the field).</li></ul> |
| `when` | Format: `when(condition, value).otherwise(defaultValue)`<br /><br />Evaluates the condition and returns the specified value when the condition is true. | <ul><li>`condition`: The boolean expression to be tested.</li><li>`value`: The value to be returned when condition is true.</li></ul> |

---

## LookupValue

This function rule allows you to perform a lookup — search and retrieve values from another dataset. The values retrieved from the lookup are placed into a new, auto-generated derived field. The returned lookup values can then be used where Data Profiler accepts a derived field (in expressions, other rules, and to write values to a target).

A derived field is stored in-memory (RAM). The derived fields are available in-memory and can be used for further profiling and analysis. Users can also include the derived field values with profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

Once the LookupValue rule is added to a profile, it is categorized under `-MultiFieldRules-` in the Field/Rule pane (instead of under `-OutputFields-`).

This rule uses an incore lookup which is stored in memory (RAM). The lookup dataset contains two columns that are of interest for configuring this rule: one column contains the values that reside in the source or derived field (referred to as the lookup key field); the other column stores the desired values (referred to as the return lookup field). When the rule executes, the engine compares the source or derived field value (referred to as the matching key value) with the lookup key field value. When these values match, the return lookup field value is added to the new derived field.

Lookups can also be created in the Source tab (see Creating Lookups in Profile Editor Source Tab).

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | `-MultipleFields-` is displayed here. |
| **Rule Type** | The type of rule that is applied to the field. That is `LookupValue` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Lookup Name** | Click **Add** to create a lookup in the Lookup Configuration Wizard, or select an existing lookup from the drop-down list. Click the edit icon to edit or the delete icon to delete a lookup.<br />**Tip**: In the Lookup Configuration Wizard, connect to the lookup as with a source connector. For example, select the ASCII (Delimited) connector and set the Header property to True. When prompted to select the Lookup Key Field, select the lookup column for comparing against the source or derived field. |
| **Lookup Key Field** | The lookup field selected in the Lookup Configuration Wizard. This field contains the lookup values to compare against the Matching Key Field values. When the Lookup Key Field and the Matching Key Field values match, the Return Lookup Field value from the lookup is added to the derived field. If no match is found, a null or blank value is returned. |
| **Matching Key Field** | Select the field in the source (or derived field) to match against the Lookup Key Field values. When the Lookup Key Field and the Matching Key Field values match, the Return Lookup Field value is added to the derived field. |
| **Return Lookup Field** | Select the field in the lookup that contains the values to retrieve from the lookup dataset. These values are stored in-memory within the derived field. |
| **Derived Field Name** | A default derived field name (`d_<FieldName>LookupValue` or `d_<FieldName>LookupValue_n`) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |

### Example

This example uses a source with a `State` column containing full state names (such as California and Texas), and a lookup dataset (`StateCodes`) that contains a `State_Name` column and an `Abbreviation` column.

The source `State` column and the lookup dataset are shown below:

<table>
<thead><tr><th>Source (or Derived Field)</th><th>Lookup: StateCodes</th></tr></thead>
<tbody><tr style={{verticalAlign: "top"}}>
<td>**"State"**<br />"Texas"<br />"California"<br />"Ohio"<br />"Ohio"<br />"California"</td>
<td>"**State_Name","Abbreviation"**<br />"California","CA"<br />"Texas","TX"<br />"Ohio","OH"</td>
</tr></tbody>
</table>

**Note**: The elements displayed in bold below are used as the parameter settings in this example.

To use the dataset as the lookup to retrieve state codes, add `StateCodes` as a lookup (see [Adding a lookup source](#adding-a-lookup-source)), and set the LookupValue rule parameters as follows:

- **Lookup Name** - `StateCodes` (The name of the lookup file.)
- **Lookup Key Field** - `State_Name` (The lookup field to match against the source Matching Key Field.)
- **Matching Key Field** - `State` (The source field to match against the Lookup Key Field value. When the Lookup Key Field and the Matching Key Field values match, the Return Lookup Field value is added to the derived field.)
- **Return Lookup Field** - `Abbreviation` (The lookup field that contains the values to retrieve from the lookup dataset. These values are stored in-memory within the new derived field.)
- **Derived Field Name** - `d_State_LookupValue` (The new derived field containing the retrieved state code values, which can be included in output by mapping an output field Expression property to the derived field.)

For step-by-step instructions, see [Adding a lookup source](#adding-a-lookup-source), [Creating a LookupValue rule](#creating-a-lookupvalue-rule), and [Writing retrieved lookup values to the target](#writing-retrieved-lookup-values-to-the-target).

### Adding a lookup source

1. In the **Rules** tab, click **> Add New Rule**. The Add Rules dialog opens.
2. In the **Data Prep** tab, select **LookupValue**, and click **Finish**.
3. In the **Lookup Name** field, click **Add** to open the Lookup Configuration Wizard.
4. In the Wizard, connect to the lookup dataset as you would connect to a source. For example, select the **ASCII (Delimited)** connector and set the **Header** property to **True**.
5. Click **Connect** and **Next** to preview the lookup data.
6. In the **Field Name** column, select the field to use as the **Lookup Key Field** (the field that contains the values to compare against the source), then click **Finish**.

The lookup source is added and appears in the **Lookup Name** drop-down list.

### Creating a LookupValue rule

1. In the **Rules** tab, click **> Add New Rule**. The Add Rules dialog opens.
2. In the **Data Prep** tab, select **LookupValue**, and click **Finish**.
3. In the **Lookup Name** drop-down list, select the lookup source you added (see [Adding a lookup source](#adding-a-lookup-source)). To change the lookup name, click the edit button beside the lookup name.
4. **Matching Key Field**: Select the source or derived field to use for matching against the Lookup Key Field.
5. **Return Lookup Field**: Select the lookup field that contains the values to retrieve and store in the new derived field.
6. Save all files.

The retrieved lookup values can now be used in other rules or to map to an output field using the new derived field. To create a new output field for the retrieved lookup values, continue to [Writing retrieved lookup values to the target](#writing-retrieved-lookup-values-to-the-target).

### Writing retrieved lookup values to the target

1. In the **Rules** tab, **Field/Rule** pane, create a new output field for the derived values:
   - Click **> Add New Field**, and enter a descriptive name for the new field.
   - In the **Expression** column for the new field, select the required derived field from the drop-down list.

   The new field is now mapped to the derived field containing the retrieved lookup values.
2. Save the profile, then click to execute the profile. The Total pass/fail data pie chart is displayed.
3. Click the pie chart to open the **Drill Down** data tab. Scroll to the right to locate the derived field values in the Drill Down table.

To omit a field from the output, select the field in the **Field/Rule** pane and click to delete it. The field is not deleted in the source data.

### Editing a lookup source

1. In the **Rules** tab, click **> Add New Rule**. The Add Rules dialog opens.
2. In the **Data Prep** tab, select **LookupValue**, and click **Finish**.
3. Select the lookup you want to edit from the **Lookup Name** drop-down list.
4. Click to edit (on the right of the **Lookup Name** drop-down list) in the Configuration Wizard.
5. Edit fields and properties as needed, click **Connect** and **Next**.
6. Verify that you are connected to the correct lookup data, note the column to be used for the Lookup Key Field (the field that contains the replacement value), then click **Next**.
7. In the **Field Name** column, select the field to use as the Lookup Key Field and click **Finish**.

**Note**: When users change the lookup name, connection, key field, replacement field, or derived field name, all related elements and metrics using the lookup file reflect the changes (for example, the rule name).

### Deleting a lookup source

1. In the **Rules** tab, click **> Add New Rule**. The Add Rules dialog opens.
2. In the **Data Prep** tab, select **LookupValue**, and click **Finish**.
3. Select the lookup you want to delete from the **Lookup Name** drop-down list.
4. Click to delete (on the right of the **Lookup Name** drop-down list). The lookup is removed from the **Lookup Name** drop-down list and the **Source** tab **Source** drop-down list.

### Supported Data Types

All data types. However, the Lookup Key Field and Matching Key Field values must be the same data type.

---

## MathTransform

This function rule applies a mathematical transformation to a numeric field. It creates a new in-memory derived field.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Total (Numeric)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `MathTransform` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Math Operation** | Select the mathematical operation to perform: <ul><li>**Absolute Value** - Returns absolute value. For example: `abs(-5) = 5`</li><li>**Add** - Returns `a + b`. For example: `5 + 3 = 8`</li><li>**Arc Cosine** - Returns `arccos(x)`. For example: `acos(1) = 0`</li><li>**Arc Sine** - Returns `arcsin(x)`. For example: `asin(0) = 0`</li><li>**Arc Tangent** - Returns `arctan(x)`. For example: `atan(0) = 0`</li><li>**Arc Tangent 2** - Returns `atan2(y, x)`. For example: `atan2(1,1) = PI/4`</li><li>**Cosine** - Returns `cos(x)` (radians). For example: `cos(0) = 1`</li><li>**Cube Root** - Returns cube root. For example: `cbrt(27) = 3`</li><li>**Divide** - Returns `a / b`. For example: `10 / 2 = 5`</li><li>**Exponential** - Returns `e` raised to the power of the given value. For example: `exp(1) = 2.718`</li><li>**Floor** - Returns the largest integer not greater than the value. For example: `floor(4.9) = 4`</li><li>**Hyperbolic Cosine** - Returns `cosh(x)`. For example: `cosh(0) = 1`</li><li>**Hyperbolic Sine** - Returns `sinh(x)`. For example: `sinh(0) = 0`</li><li>**Hyperbolic Tangent** - Returns `tanh(x)`. For example: `tanh(0) = 0`</li><li>**Log** - Returns the natural logarithm of the value. For example: `log(1) = 0`</li><li>**Log10** - Returns the base-10 logarithm of the value. For example: `log10(100) = 2`</li><li>**Modulo** - Returns `a % b` (remainder). For example: `10 % 3 = 1`</li><li>**Multiply** - Returns `a * b`. For example: `4 * 3 = 12`</li><li>**Negate** - Returns `-x`. For example: `negate(5) = -5`</li><li>**Power** - Returns `a` raised to the power of `b`. For example: `pow(2,3) = 8`</li><li>**Round** - Returns the closest integer. For example: `round(4.5) = 5`</li><li>**Sign** - Returns `1` if positive, `-1` if negative, `0` if zero.</li><li>**Sine** - Returns `sin(x)` (radians). For example: `sin(0) = 0`</li><li>**Square Root** - Returns the square root. For example: `sqrt(9) = 3`</li><li>**Subtract** - Returns `a - b`. For example: `10 - 3 = 7`</li><li>**Tangent** - Returns `tan(x)` (radians). For example: `tan(0) = 0`</li><li>**To Degrees** - Converts radians to degrees. For example: `degrees(PI) = 180`</li><li>**To Radians** - Converts degrees to radians. For example: `radians(180) = PI`</li></ul> |
| **Use Field** | Specifies the second operand as another field (which must be specified in the **Second Operand Field** parameter). This parameter is an alternative to the **Use Constant** parameter, and only available when a binary math operation is selected. |
| **Use Constant** | Specifies the second operand as a constant value (which must be specified in the **Constant Value** parameter). This parameter is an alternative to the **Use Field** parameter, and only available when a binary math operation is selected. |
| **Second Operand Field** | This parameter is only available when the **Use Field** parameter is selected. |
| **Constant Value** | This parameter is only available when the **Use Constant** parameter is selected. |
| **Decimal Precision** | (Optional) Specifies the number of decimal places for rounding the result. By default, the value is `-1` (which performs no rounding).<br /><br />A positive integer specifies the number of digits to keep after the decimal point. For example, `2` rounds the result to two decimal places: `3.14159` is rounded to `3.14`.<br /><br />A negative integer rounds the number to the nearest place value before the decimal point. For example, `-2` rounds the result to the nearest 100 (two positions before the decimal): `175.00` is rounded to `200.0`. |
| **Derived Field Name** | A default derived field name (`d_<FieldName>_MathTransform` or `d_<FieldName>_MathTransform_n`, where `n` is 1, 2, 3, and so on) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |

### Supported Data Types

- Input: Numeric
- Output: Numeric

### Remarks

- Does not provide pass and fail statistics and generates a derived field. See Derived Fields.

---

## ParseExtract

This function rule enables users to parse and extract parts from a structured or composite field value (such as a URI, Email, Full Name, Address, and Timestamp). Users apply the parsing function that is relevant to the data type in the field. For example, the Parse Name, Parse Email or Parse Time function. The parsing functions generate a derived field for each part. For example, the Parse Email function extracts two parts: `username@domain`. The username part is to the left of the `@` symbol and the domain part is to the right of the `@` symbol. Two derived fields are generated — one for usernames and another for domains.

A derived field is stored in-memory (RAM). The derived fields are available in-memory and can be used for further profiling and analysis. Users can also include the derived field values with profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

For a step-by-step example, see [Example](#example-1).

Some parsing functions require additional parameters such as FORMAT or Regex in order to be specified.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_ParseExtract`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Email (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ParseExtract` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Function** | Select the parsing function relevant to the type of data in the field. Available functions include: Parse Full Name, Parse Email, Parse URI, Parse Address, Parse Date, Parse Time, Parse Timestamp, Extract RegX Groups, and others. See [Functions](https://testdocs.actian.com/dataconnect/12.5/User/Data_Prep_Rules.htm) for details. |
| **Format** | Select the desired format. Each function has a different set of Part IDs available. See [Functions](#functions) for details. |
| **+** | Click **+ >** and select one of the following options to add a new part: <ul><li>**Add Part** - Select to manually add a single part from the field. A single row is added to the table. You can then select the specific part from the Part drop-down list.</li><li>**Add Available Parts** - Select to add all the available parts from the field. A single row is added to the table for each part. The Part column is auto-populated.</li></ul>**Tip**: To delete a part from the table, select the part and click the delete icon. |
| **Part** | The unique identifier for the part. This field is populated by the Function selected. For some functions, a dropdown list is provided with some or all of the available parts which you can select from. For example, the Parse Full Name function provides all of the available parts, including `[first]` and `[last]` which are parts for the first name and the last name. When a dropdown list of parts is provided, select a part from the list.<br /><br />When a dropdown list of parts for the function is not provided, enter a value for an element that is shown for the Format field selection. For example, the Parse Time Date function provides format options which include `MM`, `dd` and `yyyy`. Thus, you can enter `MM` for month, `dd` for day and `yyyy` for year as parts.<br /><br />Likewise, the Parse Timestamp and Parse Time functions provide format options which include `HH`, `mm` and `ss`. Thus, you can enter `HH` for hour, `mm` for minute and `ss` for seconds as parts.<br /><br />When the Extract RegX Groups function is used, this value refers to the group numbers, where `0` = entire match, `1` = first group, `2` = 2nd group, and so on.<br /><br />This value can also be a named group. Named groups can also be used if defined in the pattern (for example, `(?<name>...)` → `name`).<br /><br />For more information, see [Functions](#functions). |
| **Derived Field Name** | A default derived field name is auto-generated for each extracted part. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |
| **Data Type** | The data type of the part. |

### Supported Data Types

- Input: String (and other types depending on function)
- Output: String

### Remarks

Does not provide pass and fail statistics and generates a derived field. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

### Functions

The following functions are available.

| Function | Description |
| :--- | :--- |
| **Parse Full Name** | This function is only available for string fields, and requires that you select a format to parse string into. Parses a full name into the following PartIDs: <ul><li>**title** - The title part of a full name. For example, Mr and Mrs.</li><li>**first** - The first name part of a full name.</li><li>**middle** - The middle name part of a full name.</li><li>**last** - The last name part of a full name.</li><li>**suffix** - The suffix part of a full name. For example, PhD and Sr.</li></ul> |
| **Parse Address** | Parses a postal address into the following PartIDs: <ul><li>**street** - The street address.</li><li>**city** - The city name.</li><li>**postcode** - The zip code parsed from the address.</li><li>**state** - The state name.</li><li>**po_box** - The post office box number.</li><li>**country** - The country name.</li></ul> |
| **Parse Email** | Parses an email into the following PartIDs: <ul><li>**username** - The username part of the email (the part before the @ symbol).</li><li>**domain** - The email domain (the part after the @ symbol).</li></ul> |
| **Parse Timestamp** | This function is only available for string fields, and requires that you select a format to parse string into. Parses the parts of a timestamp based on the symbols defined for SimpleDateFormat (Java Platform SE 8). See [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html).<br /><br />One or more symbols can be referenced in a single part. For example, PartID = `dd-MM` returns `12-09` for a timestamp value `12-09-2002T30:30:34`. |
| **Parse Date** | This function is only available for string fields, and requires that you select a format to parse string into. Parses the parts of a date based on the symbols defined for SimpleDateFormat (Java Platform SE 8). See [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html).<br /><br />One or more symbols can be referenced in a single part. For example, PartID = `dd-MM` returns `12-09` for a date value `12-09-2002T30:30:34`. |
| **Parse Time** | This function is only available for time fields, and requires that you select a format to parse string into. Parses time parts based on the symbols specified for SimpleDateFormat (Java Platform SE 8). See [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html).<br /><br />One or more symbols can be referenced in a single part. For example, PartID = `HH-mm` returns `30-30` for a timestamp value `12-09-2002T30:30:34`. |
| **Parse URI** | Parses a URI into the following PartIDs: <ul><li>**scheme** - The scheme part of the URI. For example, http, https, ftp, s3.</li><li>**username** - The username part of the URI, if one is referenced.</li><li>**host** - The hostname part of the URI.</li><li>**port** - The port specified in the URI.</li><li>**path** - The path segment of the URI.</li><li>**query** - The query part of the URI which is typically followed by the `?` character.</li></ul> |
| **Extract RegX Groups** | Extracts the groups captured from the specified regular expression when it matches the field value. This function requires that you enter a regular expression. The Part identifier refers to the group numbers, where `0` = entire match, `1` = first group, `2` = 2nd group, and so on. The Part identifier can also be a named group.<br /><br />**Simple example:** `(.+?)\s(.+?)` - There are two groups, as can be seen in the matching parenthesis groups. Suppose the input is `Actian Corporation`, then PartId = `1` returns `Actian`, PartId = `2` will yield `Corporation`.<br /><br />**Named Group example:** `(<cname>.+?)\s.+` - There is one named group, `cname`. PartId = `cname` returns `Actian` for the input `Actian Corporation`. |

### Example

To illustrate how to use the ParseExtract rule, we apply the rule to a `Name` column which contains a first name, middle name, and last name in a single field. We will extract the first and last names into two new output fields.

1. In the **Rules** tab, Fields section, click **> Add New Rule**, then select the `Name` field from the **Select Field Name** drop-down list.
2. In the **Data Prep** tab, select **ParseExtract**, and click **Finish**.

   The rule is displayed under the `Name` field.
3. In the Rule Definition pane, the default Rule Name, `Name_ParseExtract`, is displayed (which can be edited). Do the following:
   - Select **Parse Full Name** from the **Function** drop-down.
   - Select `[last] [first]` from the **Format** drop-down.
   - Click **> Add Available Parts**.
   - Select unwanted parts (retain `first` and `last`) and click to delete.
4. In the **Field/Rule** pane, create two new output fields by doing the following:
   - Click **> Add New Field**, change the default name `field-1` (which appears at the bottom of the Field/Rule list) to match the first part name. In this case, enter `first`.
   - Click **> Add New Field**, change the default name `field-2` (which appears at the bottom of the Field/Rule list) to match the last part name. In this case, enter `last`.
5. Map the two new fields to the relevant derived field content by doing the following:
   - **first** field — Click in the **Expression** field and select `d_Name_ParseExtract_1` from the drop-down list.
   - **last** field — Click in the **Expression** field and select `d_Name_ParseExtract_3` from the drop-down list.
6. Save the profile, then click to execute the profile.

   The Total pass/fail data pie chart is displayed.
7. Click the pie chart to open the **Drill Down** data tab. Scroll to the right to see the three new fields populated with the data.

**Tip**: If you no longer need to see the `Name` field in the output, you can remove it: Select it under **-Output Fields-** and click to delete it. The `Name` field is not deleted in the source data.

---

## StringJoin

This function rule combines multiple fields into a single value, based on a specified delimiter. A derived field is auto-generated for the new value. The derived field can be used for further processing, to build additional rules, and to create a new output field.

This rule supports all data types. Default text formatting is used to convert and output to a string format. For example, date, time, and timestamp fields are formatted using the ISO 8601 format.

Once the StringJoin rule is added to a profile, it is categorized under `-MultiFieldRules-` on the Rules tab, instead of under `-OutputFields-`.

A derived field is stored in-memory (RAM). Derived fields can be used for further profiling and analysis, and can also be included in profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | `-MultipleFields-` is displayed here. |
| **Rule Type** | The type of rule that is applied to the field. That is `StringJoin` (Function rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Delimiter** | (Optional) Select or enter the delimiter to use between each string in the joined result. For example, if the delimiter is set to Comma (`,`), each string in the resulting value will be separated by a comma: `<String1>,<String2>,<String3>`. By default, this parameter is set to Comma (`,`). If a delimiter is not required, it can be set to an empty string. Options are: <ul><li>**COMMA** (default)</li><li>**SEMICOLON**</li><li>**TAB**</li><li>**SPACE**</li><li>**PIPE**</li><li>**COLON**</li><li>**CR_LF**</li><li>**LF**</li><li>**CR**</li></ul> |
| **Skip Null/Empty Values** | (Required) Specifies whether null or empty values are included in the joined result. <ul><li>Select to **exclude** (True) null or empty strings from the joined result.</li><li>Deselect to **include** (False) null or empty strings in the joined result.</li></ul>By default, this parameter is set to include (False). |
| **Null Substitute** | (Optional) When Skip Null/Empty Values is set to include (False), enter a substitute string to use in place of null or empty values in the joined result. |
| **Derived Field Name** | A default derived field name is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |
| **Available** | Lists fields that are available for joining. Select one or more fields that you want to include in the join, then click **>** to move them to the **Selected** list.<br />Click **>>** to add all the fields. |
| **Selected** | Lists fields that will be joined.<br />Select one or more fields and click **&lt;** to move them back into the **Available** list.<br />Click **&lt;&lt;** to remove all the fields.<br />Click the up and down icons to reorder the fields in the output. |


### Supported Data Types

- Input: All data types
- Output: String

### Example

To illustrate how to use the StringJoin rule, we join two columns: an `Account` column and a `Balance` column, using the pipe delimiter: `<Account>|<Balance>`.

After the StringJoin rule generates a derived field for the new, joined values, we create a new output field called `Account&Balance`, map it to the derived field, and view the new, joined values in the output. The `Account&Balance` output field will have, for example, the following output: `01-6063|262.98`.

1. In the **Rules** tab, Fields section, click **> Add New Rule**, then select the `Account Number` field from the **Select Field Name** drop-down list.
2. In the **Data Prep** tab, select **StringJoin**, and click **Finish**.
3. In the Rule Definition pane, select **PIPE** from the **Delimiter** drop-down, then select `null` from the **Null Substitute** drop-down.
4. In the **Available** list, select `Balance` and click **>** to add it to the **Selected** list. Use the up/down arrows to reorder the fields.
5. In the **Field/Rule** pane, create a new output field by doing the following:
   - Click **> Add New Field**, change the default name `field-1` (which appears at the bottom of the Field/Rule list) to a descriptive name for the derived content. In this case, name it `Account&Balance`.
   - Map the new field to the derived field content by clicking the `Account&Balance` **Expression** field and selecting `d_Account_Number_StringJoin` from the drop-down list.
6. Save the profile, then click to execute the profile.

   The Total pass/fail data pie chart is displayed.
7. Click the pie chart to open the **Drill Down** data tab. Scroll to the right to see the three new fields populated with the data.

To edit the rule, return to the **Rules** tab and select the rule under **-MultiFieldRules-**.

**Tip**: If you no longer need to see the `Account Number` field in the output, you can remove it: Select it under **-Output Fields-** and click to delete it. The `Account Number` field is not deleted in the source data.

### Remarks

Does not provide pass and fail statistics and generates a derived field. See Derived Fields.

---

## StringSplit

This function rule splits a string value in a field into separate substrings, or parts, based on a specified delimiter. A derived field is auto-generated for each part. The derived fields can be used for further processing, to build additional rules (such as referencing the derived field in a rule), and to create new output fields.

For example, if your source data has a **Name** column that contains both first and last names, and you need a column strictly for first names and a column strictly for last names. You can use the StringSplit rule to create the two columns. The columns can then be included in the profile output.

For a step-by-step example, see [Example](#example-2).

A derived field is stored in-memory (RAM). Derived fields can be used for further profiling and analysis, and can also be included in profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Name (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StringSplit` (Function rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Limit** | (Optional) Specifies the maximum number of parts to include in the result of the string split. <ul><li>If the limit is greater than zero (`0`), the number of parts will not exceed the limit specified, and the last part will contain the remaining portion of the original string.</li><li>If the limit is zero (`0`) or less, all substrings produced by the split will be included.</li></ul>The default value is `20`.<br />**Note**: You can still add additional parts that exceed the Limit specified. |
| **Delimiter** | (Optional) Select or enter the delimiter to use for splitting substrings in the field. The delimiter is treated as a literal string unless the Regex checkbox is selected. The default value is SPACE. Options are: <ul><li>**COMMA**</li><li>**SEMICOLON**</li><li>**TAB**</li><li>**SPACE**</li><li>**PIPE**</li><li>**COLON**</li><li>**CR_LF**</li><li>**LF**</li><li>**CR**</li></ul> |
| **Regex** | (Optional) Specifies whether the delimiter is treated as a regular expression. <ul><li>Select to treat the delimiter as a regular expression.</li><li>Deselect to treat the delimiter as a literal string (default).</li></ul> |
| **+** | (Required) Add the parts that you want to derive into memory as fields. Click **+ >** and select one of the following options: <ul><li>**Add Part** - Adds a single row for referencing a specific split substring (for example, the 0th, 10th, or 20th part).</li><li>**Add Available Parts** - Adds rows up to the number specified in the Limit parameter. After using Add Available Parts, you can still add additional parts.</li></ul> |
| **Part** | Index of the split substring within the result, starting with `0` as the first element. |
| **Derived Field Name** | A default derived field name (`d_<FieldName>StringSplit` or `d_<FieldName>StringSplit_n`, where `n` is 1, 2, 3, and so on) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |
| **Data Type** | The data type of the derived field. |

### Supported Data Types

- Input: String
- Output: String (list of substrings derived as fields into memory)

### Example

To illustrate how to use the StringSplit rule, we use a case where the source data has a `Name` column that contains a value comprised of two substrings — a first name and a last name:

`<firstName> <lastName>`

We want our output to have a column strictly for first names and a column strictly for last names.

Since the two substrings are separated by a space, we use the SPACE delimiter to split the value into two parts. When the parts are created, two derived fields are auto-generated. We will link those derived fields to two new output fields we also create: `FirstName` and `LastName`.

1. In the **Rules** tab, click **> Add New Rule**, then select the `Name` field from the **Select Field Name** drop-down list.

   Rules that are applicable to the data in the selected field are listed.
2. In the **Data Prep** tab, select **StringSplit**, and click **Finish**.

   In the Rule Definition pane, the default Rule Name, `Name_StringSplit`, is displayed (which can be edited), and a single derived field placeholder is listed in the Parts table.
3. Set **Limit** to `2` and select **SPACE** from the **Delimiter** drop-down.
4. Click **> Add Part** to add a second derived field name, and enter `1` in the **Part** column.
5. In the **Field/Rule** pane, create two new output fields by doing the following:
   - Click **> Add New Field**, change the default name `field-1` (which appears at the bottom of the Field/Rule list) to a descriptive name for the derived content. In this case, name it `First Name`.
   - Click **> Add New Field**, change the default name `field-2` (which appears at the bottom of the Field/Rule list) to a descriptive name for the derived content. In this case, name it `Last Name`.
6. Map the two new fields to the corresponding derived field by doing the following:
   - **First Name** field — Click in the **Expression** field and select `d_Name_StringSplit_0` from the drop-down list.
   - **Last Name** field — Click in the **Expression** field and select `d_Name_StringSplit_1` from the drop-down list.
7. Save the profile, then click to execute the profile.

   The Total pass/fail data pie chart is displayed.
8. Click the pie chart to open the **Drill Down** data tab. Scroll to the right to see the new fields populated with the data.

---

## StringToConversion

This conversion rule converts a given string field into a specified data type.

A derived field is stored in-memory (RAM). The derived fields are available in-memory and can be used for further profiling and analysis. Users can also include the derived field values with profile output fields. For more information, see [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `StringToConversion` (Conversion rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Convert To** | The data type of the derived in-memory field: <ul><li>**Boolean**</li><li>**Date**</li><li>**Double**</li><li>**Float**</li><li>**Int**</li><li>**Long**</li><li>**Numeric**</li><li>**Time**</li><li>**TimeStamp**</li></ul> |
| **Format** | The following formats are required when converting to **Boolean**: <ul><li>True.False</li><li>Yes.No</li><li>1.0</li><li>T.F</li></ul>The following formats are required when converting to **Date** (you can select from the available options or specify your own pattern): <ul><li>yyyy-M-dd</li><li>yyyy-MM-dd</li><li>MM/dd/yy</li><li>M/dd/yyyy</li><li>MM/dd/yyyy</li><li>M-dd-yyyy</li><li>MM-dd-yyyy</li><li>MMM-yy</li><li>MMM dd, yyyy</li></ul>See [DateTime Format](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html).<br /><br />The following formats are required when converting to **Time**: <ul><li>HH:mm:ss</li><li>HH:mm</li><li>hh:mm:ss</li><li>hh:mm aa</li></ul>The following formats are required when converting to **TimeStamp**: <ul><li>yyyy-MM-dd HH:mm:ss</li><li>MM/dd/yyyy HH:mm</li><li>MMM dd, yyyy HH:mm aa</li><li>EEE, dd MMM yyyy HH:mm:ss Z</li><li>ISO 8601 format: `yyyy-MM-dd'T'HH:mm:ss+hh:mm` (the `T` must be enclosed within single quotes)</li></ul>**Time Zone** - Select your time zone from the available options when converting to TimeStamp.<br /><br />When converting to **Numeric**, **Double**, **Float**, **Long**, or **Int**, there are no parameters to specify. |
| **Derived Field Name** | A default derived field name (`d_FieldName_StringToConversion`, `d_FieldName_StringToConversion_n` where `FieldName` is the field the rule applies to and `n` is 1, 2, 3, and so on) is provided and displayed here. However, you can edit or overwrite it. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm). |

### Supported Data Types

- Input: String
- Output: Date, Time, TimeStamp, Boolean, Numeric, Double, Float, Long, Int

### Remarks

Provides pass and fail statistics and generates a derived field. See [Derived Fields](https://testdocs.actian.com/dataconnect/12.5/User/Derived_Fields.htm).
