---
title: RemoveDuplicatesFuzzyMatching
toc_max_heading_level: 4
---

import MarkdownTable from '@site/src/components/MarkdownTable';

# RemoveDuplicatesFuzzyMatching

This test rule writes unique records to pass target and duplicate records to fail target based on fuzzy matching rules and match score filter.
This rule supports all data types.

Finding “duplicate” data in this case does not mean finding an exact match but means finding an approximately similar record. Fuzzy Matching (also called Approximate String Matching) is a technique that can be used to filter these similar looking fuzzy duplicates by finding an approximate match.

There are many situations where fuzzy matching techniques can be used. For instance, using fuzzy matching, you can find multiple variations of a word, term, or phrase. For example, if your word is “DataConnect,” fuzzy matching returns DataConnect, Data Connect, D Connect, Data C, DattaConecct, and so on.

This rule uses clusters. Let us now understand how the cluster technique works. The main idea in clustering is to group similar records together, into clusters, based on comparison using key fields. When the profile is executed, the values in the specified key field are compared to each other to identify duplicates. If a duplicate value is found, then a cluster is created. The cluster contains the duplicate records, based on the key field and is assigned a cluster ID.
After a cluster is created, you can configure a Match Score Filter, a Cluster Matching Rule, and a Record Matching Rule to specify criteria for finding approximately similar records within a cluster.

:::note
The duplicate records are written to the fail target and unique records are written to the pass target. The cluster file is stored as a separate csv file. In the Project Navigator view, expand the project folder and double-click the \<ProfileName\>_RemoveDuplicates.csv file to view the cluster file.
:::

## Rule Properties (no HTML required)

This rule has the following properties.

| <div style={{width: 100}}>Property</div> | Description |
| :--- | :--- |
| **Rule Name** | A default rule name (`RemoveDuplicatesFuzzyMatching`) is provided and displayed here. However, you can edit or overwrite it. Click **Reset** to restore the default rule name. <br />**Note**:  The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `'r_'` will be prepended to any rules created based on that field.|
| **Field Name** | The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`. |
| **Rule Type** | The type of rule that is applied to the field. That is RemoveDuplicatesFuzzyMatching (Test rule). <br />**Tip**:  A Red Cross in a rule icon (for example XXXX) indicates that the rule has a parameter that has not been defined. |

## Rule Properties (list instead of table)

This rule has the following properties.
* **Rule Name**: A default rule name (RemoveDuplicatesFuzzyMatching) is provided and displayed here. However, you can edit or overwrite it. Click Reset to restore the default rule name. <br />Note:  The underscore (`_`) character is the only special character allowed in the name. Rule names cannot begin with a digit. If a field or column in the source data starts with a digit, `'r_'` will be prepended to any rules created based on that field.
* **Field Name**: The field name to which the rule applies is displayed here, along with the data type in parentheses. For example, `ZIP (String)`.
* **Rule Type**: The type of rule that is applied to the field. That is RemoveDuplicatesFuzzyMatching (Test rule).
   :::note[Tip]
   A Red Cross in a rule icon (for example ) indicates that the rule has a parameter that has not been defined.
   :::

## Rule Parameters (table with HTML for list)

| <div style={{width: 100}}>Property</div> | Description |
| :--- | :--- |
| **Dimension** | (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension. <br /><br />A dimension represents a characteristic of data quality:<br /> <ul><li>Accuracy - The data is correct.</li><li>Completeness - The data is present.</li><li>Consistency - The data uses the same format or pattern across different sources.</li><li>Timeliness - The data is recent and available.</li><li>Uniqueness - The data is not duplicated.</li><li>Validity - The data conforms to business rules and is within an acceptable range.</li></ul> |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).<br />For more information, see Add New Rule. |

```
| <div style={{width: 100}}>Property</div> | Description |
| :--- | :--- |
| **Dimension** | (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension. <br /><br />A dimension represents a characteristic of data quality:<br /> <ul><li>Accuracy - The data is correct.</li><li>Completeness - The data is present.</li><li>Consistency - The data uses the same format or pattern across different sources.</li><li>Timeliness - The data is recent and available.</li><li>Uniqueness - The data is not duplicated.</li><li>Validity - The data conforms to business rules and is within an acceptable range.</li></ul> |
| **Weight** | (Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).<br />For more information, see Add New Rule. |
```

## Rule Parameters (using MDX component)

<MarkdownTable
  headers={[
    'Property',
    'Description',
  ]}
  rows={[
    [
      '**Dimension**',
      `(Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension.

   A dimension represents a characteristic of data quality:
   - Accuracy - The data is correct.
   - Completeness - The data is present.
   - Consistency - The data uses the same format or pattern across different sources.
   - Timeliness - The data is recent and available.
   - Uniqueness - The data is not duplicated.
   - Validity - The data conforms to business rules and is within an acceptable range.`,
      ],
      [
         '**Weight**',
         `(Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).

   For more information, see Add New Rule.`,
    ],
  ]}
/>

```
<MarkdownTable
  headers={[
    'Property',
    'Description',
  ]}
  rows={[
    [
      '**Dimension**',
      `(Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension.

   A dimension represents a characteristic of data quality:
   - Accuracy - The data is correct.
   - Completeness - The data is present.
   - Consistency - The data uses the same format or pattern across different sources.
   - Timeliness - The data is recent and available.
   - Uniqueness - The data is not duplicated.
   - Validity - The data conforms to business rules and is within an acceptable range.`,
      ],
      [
         '**Weight**',
         `(Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).

   For more information, see Add New Rule.`,
    ],
  ]}
/>
```

## Rule Parameters (list instead of table)

* **Dimension**: (Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension.  
  A dimension represents a characteristic of data quality:
  * Accuracy - The data is correct.
  * Completeness - The data is present.
  * Consistency - The data uses the same format or pattern across different sources.
  * Timeliness - The data is recent and available.
  * Uniqueness - The data is not duplicated.
  * Validity - The data conforms to business rules and is within an acceptable range.
* **Weight**: (Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).
For more information, see Add New Rule.

## Rule Parameters (subheadings in TOC)

####  Dimension
(Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension.

A dimension represents a characteristic of data quality:
  * Accuracy - The data is correct.
  * Completeness - The data is present.
  * Consistency - The data uses the same format or pattern across different sources.
  * Timeliness - The data is recent and available.
  * Uniqueness - The data is not duplicated.
  * Validity - The data conforms to business rules and is within an acceptable range.

#### Weight
(Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).

For more information, see Add New Rule.

## Rule Parameters (subheadings not in TOC)

#####  Dimension
(Optional) Select a dimension to associate the rule with. There is no limit to the number of rules a dimension can be associated with. A rule can be associated with a single dimension.

A dimension represents a characteristic of data quality:
  * Accuracy - The data is correct.
  * Completeness - The data is present.
  * Consistency - The data uses the same format or pattern across different sources.
  * Timeliness - The data is recent and available.
  * Uniqueness - The data is not duplicated.
  * Validity - The data conforms to business rules and is within an acceptable range.

##### Weight
(Optional) Select the importance level of the rule. Values are 1-5, where 5 is the most important. The default value is 1. This value is reflected in the Data Quality Index (DQI) score and the Dimension Score (if the rule is associated with a dimension).

For more information, see Add New Rule.
