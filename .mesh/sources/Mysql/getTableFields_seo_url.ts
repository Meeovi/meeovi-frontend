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
  "language_id": {
    "Field": "language_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "sales_channel_id": {
    "Field": "sales_channel_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "foreign_key": {
    "Field": "foreign_key",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "route_name": {
    "Field": "route_name",
    "Type": "varchar(50)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "path_info": {
    "Field": "path_info",
    "Type": "varchar(750)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "seo_path_info": {
    "Field": "seo_path_info",
    "Type": "varchar(750)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "is_canonical": {
    "Field": "is_canonical",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "is_modified": {
    "Field": "is_modified",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "is_deleted": {
    "Field": "is_deleted",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "custom_fields": {
    "Field": "custom_fields",
    "Type": "longtext",
    "Collation": "utf8mb4_bin",
    "Null": "YES",
    "Key": "",
    "Default": null,
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
  }
}