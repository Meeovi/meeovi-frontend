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
  "auto_increment": {
    "Field": "auto_increment",
    "Type": "bigint(20)",
    "Collation": null,
    "Null": "NO",
    "Key": "UNI",
    "Default": null,
    "Extra": "auto_increment",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "version_commit_id": {
    "Field": "version_commit_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "entity_name": {
    "Field": "entity_name",
    "Type": "varchar(100)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "entity_id": {
    "Field": "entity_id",
    "Type": "longtext",
    "Collation": "utf8mb4_bin",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "action": {
    "Field": "action",
    "Type": "varchar(100)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
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
  "user_id": {
    "Field": "user_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "integration_id": {
    "Field": "integration_id",
    "Type": "binary(16)",
    "Collation": null,
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