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
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "priority": {
    "Field": "priority",
    "Type": "int(11)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "identifier": {
    "Field": "identifier",
    "Type": "varchar(255)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "UNI",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "availability_rule_id": {
    "Field": "availability_rule_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "app_id": {
    "Field": "app_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "process_url": {
    "Field": "process_url",
    "Type": "varchar(255)",
    "Collation": "utf8mb4_unicode_ci",
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