---
title: Profiling Rules
toc_max_heading_level: 2
---

# Profiling Rules

Profiling rules help you identify problems in source data. These rules are of the following types:

- Some rules generate aggregate statistics, which help identify inaccuracies by examining aggregated values over large datasets.
- Other rules are test rules that generate pass and fail statistics. Some of these also provide a method to invert the results into pass and fail files.

See [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm#ww1423441) for information about adding rules.

The following is a list of profiling rules:

| Rule Name | Description |
| :--- | :--- |
| [Assert](#assert) | Evaluates multiple fields and conditions within a single rule and ensures that a specific relationship or calculation between fields is met. |
| [CompareToConstant](#comparetoconstant) | Returns true or false after comparing a field to a constant value. |
| [CompareToField](#comparetofield) | Returns true or false after comparing a field value to another field value. |
| [IsNotBlank](#isnotblank) | Returns true if a field is not blank, returns false otherwise. |
| [IsNotDuplicate](#isnotduplicate) | Returns true if a field is not duplicated, returns false otherwise. |
| [IsNotNull](#isnotnull) | Returns true if a field is not null, returns false otherwise. |
| [InRange](#inrange) | Checks if the value is within a specified range. |
| [MatchesRegex](#matchesregex) | Returns true if a field matches a regular expression, returns false otherwise. |
| [ValidateCurrency](#validatecurrency) | Returns true if a field value matches the currency format of the specified region, returns false otherwise. |
| [ValidateDateFormat](#validatedateformat) | Returns true if a field value matches the date format of the specified region, returns false otherwise. |
| [ValidateEmail](#validateemail) | Returns true if a field value is a valid email address, returns false otherwise. |
| [ValidatePhoneNumber](#validatephonenumber) | Returns true if a field value is a valid phone number for the specified region, returns false otherwise. |
| [ValidatePOBox](#validatepobox) | Returns true if a field value is a valid PO Box address, returns false otherwise. |
| [ValidatePostalCode](#validatepostalcode) | Returns true if a field value is a valid postal code for the specified region, returns false otherwise. |
| [ValidateState](#validatestate) | Returns true if a field value is a valid state or province name, returns false otherwise. |
| [ValidateTimeFormat](#validatetimeformat) | Returns true if a field value matches the time format of the specified region, returns false otherwise. |

---

## Assert

This test rule provides users the ability to evaluate multiple fields and conditions within a single rule. It ensures that a specific relationship or calculation between fields is met.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | This is shown as empty, as this rule can be used to evaluate multiple fields. |
| **Rule Type** | The type of rule that is applied to the field. That is `Assert` (Test rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Script (Left Expression)** | The left expression is always a script and can be one or more valid expressions supported by the ExecuteExpression rule. Click **Build** to open the Expression Builder dialog to assist you in building the SQL script.<br /><br />For example, to add multiple regular expressions use the `RLIKE` operator:<br /><br /><pre><code>{`CASE\n  WHEN field RLIKE 'pattern1' THEN true\n  WHEN field RLIKE 'pattern2' THEN true\n  ELSE false\nEND`}</code></pre><br />See [Using the Expression Builder](https://testdocs.actian.com/dataconnect/12.5/User/Using_the_Expression_Builder.htm). |
| **Operator** | The operator that compares the left side (actual value) with the right side (expected value). Select from one of the following comparison operators: <ul><li>**Equal** - Checks if the left side value is equal to the right side value.</li><li>**Greater** - Checks if the left side value is greater than the right side value.</li><li>**Greater or Equal** - Checks if the left side value is greater than or equal to the right side value.</li><li>**Lesser** - Checks if the left side value is lesser than the right side value.</li><li>**Lesser or Equal** - Checks if the left side value is lesser than or equal to the right side value.</li><li>**Not Equal** - Checks if the left side value is not equal to the right side value.</li><li>**StartsWith** - Checks if the left side value starts with the right side value.</li><li>**EndsWith** - Checks whether the left side value ends with the right side value.</li><li>**Matches** - Checks whether the left side value matches the right side value (uses regex match).</li></ul> |
| **Expression Type (Right Expression)** | Select the type of right-hand side expression. Options depend on the Operator selection: <ul><li>**Constant** - Compare the left expression against a fixed constant value.</li><li>**Script** - Compare the left expression against another SQL/expression script.</li></ul> |
| **Dimension** | (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. The score indicates the degree to which the data meets the characteristic. Scores can be viewed in the Statistics tab post profile execution. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm). For more information about dimensions, see [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm). For information about managing dimensions, see [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## CompareToConstant

This test rule returns true or false after comparing a field to a constant value.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_CompareToConstant`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `CompareToConstant` (Test rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Operator** | Select from one of the following comparison operators: <ul><li>**Equal**</li><li>**Greater**</li><li>**Greater or Equal**</li><li>**Lesser**</li><li>**Lesser or Equal**</li><li>**Not Equal**</li></ul> |
| **Constant** | Type the constant value to compare in this text box, then press the Enter key or click **Add**. For Equal or Not Equal, you can specify one or more constants. |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

If the source has GMT timestamp data, the constant value should end with `Z`.

---

## CompareToField

This test rule returns true or false after comparing a field value to another field value.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_CompareToField`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `CompareToField` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Compare Field** | Select the field to compare against. |
| **Use Fuzzy Match** | Enable to configure Fuzzy Matching, which returns true if two strings match based on the specified Fuzzy Match Algorithm and match score filter.<br />**Note**: This option supports String data types only. |
| **Operator** | Select from one of the following comparison operators: <ul><li>**Equal**</li><li>**Greater**</li><li>**Greater or Equal**</li><li>**Lesser**</li><li>**Lesser or Equal**</li><li>**Not Equal**</li></ul> |
| **Fuzzy Match Algorithm** | Available when Use Fuzzy Match is enabled. Select from one of the following algorithms: <ul><li>**CONTAINS**: Checks the small string in the long string.</li><li>**DAMERAU–LEVENSHTEIN**: The distance between two strings is the minimum number of operations (insertions, deletions or substitutions of a single character, or transposition of two adjacent characters) required to change one string into another. For more information, see [Damerau–Levenshtein distance](https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance).</li><li>**EXACT MATCH**: Checks two strings for exact match.</li><li>**JARO**: A measure of characters in common, being no more than half the length of the longer string in distance with consideration for transpositions.</li><li>**JARO-WINKLER**: Extends the Jaro algorithm and uses a prefix scale that gives more favorable ratings to strings that match from the beginning for a set prefix length of 4 characters. For more information, see [Jaro–Winkler distance](https://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance).</li><li>**LEVENSHTEIN**: The distance between two strings is the minimum number of single-character edits (insertions, deletions or substitutions) required to change one string into another. For more information, see [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance).</li><li>**POSITIONAL_QGRAM**: Positional q-grams is an extension to q-grams with an additional property called maxDistance used in calculating the string similarity.</li><li>**QGRAM**: Q-grams (also called n-grams) is the process of breaking up a string into multiple strings each with length n. A q-gram similarity measure between two strings is calculated by counting the number of q-grams in common.</li><li>**SHORTHAND**: Determines if the shorter string is a "shorthand" of the longer (that is, if it can be produced only by deletions). For example, IBM is a shorthand of International Business Machines.</li></ul> |
| **Fuzzy Score Filter** | Available when Use Fuzzy Match is enabled. Enter a decimal value between 0.01 and 1. Default value is 0.7. Records with a comparison score less than this value are not considered a match and are discarded. The higher the value, the stricter the matching. |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## IsNotBlank

This test rule returns true if a field is not blank, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_IsNotBlank`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `IsNotBlank` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## IsNotDuplicate

This test rule returns true if a field is not duplicated, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_IsNotDuplicate`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `IsNotDuplicate` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## IsNotNull

This test rule returns true if a field is not null, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_IsNotNull`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `IsNotNull` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## InRange

This test rule checks if a value is within a specified range.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_InRange`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Count (Integer)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `InRange` (Test rule).<br />**Tip**: A Red Cross in a rule icon (for example ![Red Cross rule icon](/img/icons/red-cross.png)) indicates that the rule has a parameter that has not been defined. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Lower Bound** | The lower range value. Select **Inclusive** to include the lower bound number in the range. |
| **Upper Bound** | The upper range value. Select **Inclusive** to include the upper bound number in the range. |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

If the source has GMT timestamp data, the lower bound and upper bound values should end with `Z`.

---

## MatchesRegex

This test rule returns true if a field matches a specified regular expression or pattern, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>_MatchesRegex`, `<FieldName>_MatchesRegex_n` where `n` is 1, 2, 3, and so on) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `myField (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `MatchesRegex` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Regular Expression** | Specify one or more regular expressions by typing or selecting them from the drop-down list, then clicking **Add**. Click the delete icon to remove an expression. For information about the regular expressions available in the drop-down list, see [Regular expressions available in the drop-down list](https://testdocs.actian.com/dataconnect/12.5/User/Profiling_Rules.htm). You can also copy/paste a regular expression or pattern detected by data discovery, or paste a macro by right-clicking in the text box and selecting the macro. See [Field Data Discovery](https://testdocs.actian.com/dataconnect/12.5/User/Field_Data_Discovery.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Remarks

Does provide pass and fail statistics.

---

## ValidateCurrency

This test rule returns true if a field value matches the currency format of the specified region, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidateCurrency`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Currency (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidateCurrency` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Region** | Select the geographical region associated with the data. |
| **Use Regular Expression** | Select to override the Region parameter and enter a custom Regex Pattern. |
| **Regx Pattern** | Available when Use Regular Expression is selected. Enter a custom regular expression to override the default used for the selected Region.<br /><br />**Custom Regular Expression Examples**<br /><br />`^\$?\d{1,3}(,\d{3})*(\.\d{2})?$` — Accepts a numeric monetary value with an optional leading dollar sign (`$`), an integer part that may include comma thousands separators, and an optional fractional part of exactly two decimal places.<br /><br />`^(USD\|EUR\|GBP)\s?\d+(\.\d{2})?$` — Accepts a currency code (USD, EUR, or GBP), followed by an optional single space, then a numeric amount with an optional fractional part of exactly two decimal places.<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidateDateFormat

This test rule returns true if a field value matches the date format of the specified region, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidateDateFormat`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Date (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidateDateFormat` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Format** | Select the format to apply: <ul><li>**Short**</li><li>**Medium**</li><li>**Long**</li><li>**Full**</li><li>**ISO 8601** (YYYY-MM-DD)</li></ul> |
| **Region** | Select the geographical region associated with the data. |
| **Use Regular Expression** | Select to override the Region and Format parameters using a custom Regex Pattern. |
| **Regx Pattern** | Available when Use Regular Expression is selected. Enter a custom regular expression to override the defaults for the selected Region and Format parameters.<br /><br />**Custom Regular Expression Example**<br /><br />`^(0[1-9]\|1[0-2])[\/\-](0[1-9]\|[12][0-9]\|3[01])[\/\-](19\|20)\d\{2\}$` — Accepts dates in MM/DD/YYYY or MM-DD-YYYY format, ensuring valid numeric ranges for months (01–12), days (01–31), and years in the 1900–2099 range. Does not verify calendar correctness (for example, February 30 or April 31 may still pass).<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidateEmail

This test rule returns true if a field value is a valid email address, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidateEmail`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Email (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidateEmail` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Regx Pattern** | Enter a custom regular expression if you do not wish to use the default.<br /><br />**Custom Regular Expression Examples**<br /><br />`"^[A-Za-z0-9.]+@MyCompany\.com$"` — Only accepts valid emails for the "MyCompany" domain.<br /><br />`"^.+@.+\..+$"` — Accepts valid emails for all domains.<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidatePhoneNumber

This test rule returns true if a field value is a valid phone number for the specified region, returns false otherwise.

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidatePhoneNumber`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Phone (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidatePhoneNumber` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Region** | Select the geographical region associated with the data. |
| **Use Regular Expression** | Select to override the Region parameter and enter a custom Regex Pattern. |
| **Regx Pattern** | Available when Use Regular Expression is selected. Enter a custom regular expression to override the default used for the selected Region.<br /><br />**Custom Regular Expression Examples**<br /><br />`^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$` — Validates US/Canada phone numbers with optional parentheses and separators.<br /><br />`^\+[1-9]\d{1,14}$` — Validates International Format (E.164), which starts with `+` followed by up to 15 digits.<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidatePOBox

This test rule returns true if a field value is a valid PO Box address, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidatePOBox`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `POB (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidatePOBox` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Regx Pattern** | Enter a regular expression if you do not wish to use the default. By default, validation is performed against the standard PO Box formats for eight countries (English, German, French, Spanish, Italian, Portuguese, Dutch, and Swedish).<br /><br />**Custom Regular Expression Example**<br /><br />`^(P\.?\s?O\.?\s?Box\s?\d+(?:\s?(?:Suite\|Unit)\s?\d+)?)$` — Validates PO Box mailing addresses, allowing common formatting variations (with or without periods and spaces), a required PO Box number, and an optional Suite or Unit number.<br /><br />Accepts: `PO Box 123`, `P.O. Box 123`, `P O Box 123`, `P.O.Box 123`, `PO Box 123 Suite 4`<br /><br />Rejects: Street addresses, missing box numbers, non-numeric box identifiers, additional trailing text.<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidatePostalCode

This test rule returns true if a field value is a valid postal code for the specified region, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidatePostalCode`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Code (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidatePostalCode` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Region** | Select the geographical region associated with the data. |
| **Use Regular Expression** | Select to override the Region parameter and enter a custom Regex Pattern. |
| **Regx Pattern** | Available when Use Regular Expression is selected. Enter a custom regular expression to override the default used for the selected Region.<br /><br />**Custom Regular Expression Examples**<br /><br />`^\d{5}(-\d{4})?` — Validates US ZIP codes, allowing either the standard 5-digit ZIP or the ZIP+4 format with an optional hyphen and four additional digits. Accepts: `12345`, `12345-6789`. Rejects: `1234`, `123456`, `12345 6789`, `ABCDE`.<br /><br />`^(GIR\s?0AA\|(?:[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}))$` — Validates UK postcodes, including the special case GIR 0AA. Accepts: `SW1A 1AA`, `SW1A1AA`, `EC1A 1BB`, `GIR0AA`. Rejects: invalid letter/digit combinations, lowercase values, extra characters.<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidateState

This test rule returns true if a field value is a valid state or province name, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidateState`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `State (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidateState` (Test rule).<br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Regx Pattern** | Enter a custom regular expression if you do not wish to use the default. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.

---

## ValidateTimeFormat

This test rule returns true if a field value matches the time format of the specified region, returns false otherwise.

:::note
Data Profiler uses the International Components for Unicode for Java (ICU4J), an open-source library from the Unicode Consortium which provides internationalization and localization support, including Unicode text processing and locale-aware formatting. For more information, see [ICU4J documentation](https://unicode-org.github.io/icu/userguide/icu4j/).
:::

### Rule Properties

| Property | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`<FieldName>ValidateTimeFormat`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name.<br />**Note**: The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `r_` will be prepended to any rules created based on that field. |
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `Time (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is `ValidateTimeFormat` (Test rule). |

### Rule Parameters

| Parameter | Description |
| :--- | :--- |
| **Format** | Select the format to apply: <ul><li>**12-Hour (AM/PM)** - Validates 12-hour time format with AM/PM (locale-aware).</li><li>**24-Hour** - Validates 24-hour time format (locale-aware separators).</li><li>**ISO 8601** - Validates ISO 8601 time format (region-independent).</li></ul> |
| **Region** | Select the geographical region associated with the data. |
| **Use Regular Expression** | Select to override the Region and Format parameters using a custom Regex Pattern. |
| **Regx Pattern** | Available when Use Regular Expression is selected. Enter a custom regular expression to override the defaults for the selected Region and Format parameters.<br /><br />**Custom Regular Expression Example**<br /><br />`"^(0?[1-9]\|1[0-2]):[0-5][0-9]$"` — 12-hour without AM/PM. Returns `9:30` and `12:00` as valid (true), and returns `9:30 AM` and `14:00` as invalid (false).<br /><br />**Tip**: You can copy/paste Regex Patterns from the Field Data Discovery String Patterns tab. |
| **Invert Test** | Select this to report the opposite results in your pass or fail file. For more information, see [Invert Rule Test](https://testdocs.actian.com/dataconnect/12.5/User/Invert_Rule_Test.htm). |
| **Dimension** | (Optional) Select a dimension to associate the rule with. A dimension represents a characteristic of data quality: <ul><li>**Accuracy** - The data is correct.</li><li>**Completeness** - The data is present.</li><li>**Consistency** - The data uses the same format or pattern across different sources.</li><li>**Timeliness** - The data is recent and available.</li><li>**Uniqueness** - The data is not duplicated.</li><li>**Validity** - The data conforms to business rules and is within an acceptable range.</li></ul>Each dimension generates a Dimension Score for its associated rules. See [Viewing Statistics](https://testdocs.actian.com/dataconnect/12.5/User/Viewing_Statistics.htm), [Add New Rule](https://testdocs.actian.com/dataconnect/12.5/User/Add_New_Rule.htm), and [Managing Data Quality Dimensions](https://testdocs.actian.com/dataconnect/12.5/User/Managing_Data_Quality_Dimensions.htm). |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1–5, where 5 is the most important. The default value is 3. |

### Supported Data Types

- Input: String

### Remarks

Does provide pass and fail statistics.
