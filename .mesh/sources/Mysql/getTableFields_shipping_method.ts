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
  "active": {
    "Field": "active",
    "Type": "tinyint(1) unsigned",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "position": {
    "Field": "position",
    "Type": "int(11)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "availability_rule_id": {
    "Field": "availability_rule_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "media_id": {
    "Field": "media_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "delivery_time_id": {
    "Field": "delivery_time_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "tax_type": {
    "Field": "tax_type",
    "Type": "varchar(50)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": "auto",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "tax_id": {
    "Field": "tax_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
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