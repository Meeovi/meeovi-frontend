// @ts-nocheck
export default {
  "token": {
    "Field": "token",
    "Type": "varchar(255)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "PRI",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "payload": {
    "Field": "payload",
    "Type": "longtext",
    "Collation": "utf8mb4_bin",
    "Null": "NO",
    "Key": "",
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
  "customer_id": {
    "Field": "customer_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "updated_at": {
    "Field": "updated_at",
    "Type": "datetime",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "current_timestamp()",
    "Extra": "on update current_timestamp()",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  }
}