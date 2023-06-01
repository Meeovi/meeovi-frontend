// @ts-nocheck
export default {
  "id": {
    "Field": "id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "PRI",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "sorting_type": {
    "Field": "sorting_type",
    "Type": "varchar(50)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": "alphanumeric",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "display_type": {
    "Field": "display_type",
    "Type": "varchar(50)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": "text",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "created_at": {
    "Field": "created_at",
    "Type": "datetime(3)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "updated_at": {
    "Field": "updated_at",
    "Type": "datetime(3)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "filterable": {
    "Field": "filterable",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "visible_on_product_detail_page": {
    "Field": "visible_on_product_detail_page",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  }
}