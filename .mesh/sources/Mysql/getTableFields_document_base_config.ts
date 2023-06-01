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
  "name": {
    "Field": "name",
    "Type": "varchar(64)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "filename_prefix": {
    "Field": "filename_prefix",
    "Type": "varchar(64)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": "",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "filename_suffix": {
    "Field": "filename_suffix",
    "Type": "varchar(64)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": "",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "document_number": {
    "Field": "document_number",
    "Type": "varchar(64)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": "",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "global": {
    "Field": "global",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "document_type_id": {
    "Field": "document_type_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "logo_id": {
    "Field": "logo_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "config": {
    "Field": "config",
    "Type": "longtext",
    "Collation": "utf8mb4_bin",
    "Null": "YES",
    "Key": "",
    "Default": null,
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