// @ts-nocheck
export default {
  "id": {
    "Field": "id",
    "Type": "char(36)",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "NO",
    "Key": "PRI",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": "(DC2Type:guid)"
  },
  "published_at": {
    "Field": "published_at",
    "Type": "bigint(20)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "body": {
    "Field": "body",
    "Type": "longtext",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "headers": {
    "Field": "headers",
    "Type": "longtext",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "properties": {
    "Field": "properties",
    "Type": "longtext",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "redelivered": {
    "Field": "redelivered",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "queue": {
    "Field": "queue",
    "Type": "varchar(255)",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "priority": {
    "Field": "priority",
    "Type": "smallint(6)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "delayed_until": {
    "Field": "delayed_until",
    "Type": "bigint(20)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "time_to_live": {
    "Field": "time_to_live",
    "Type": "bigint(20)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "delivery_id": {
    "Field": "delivery_id",
    "Type": "char(36)",
    "Collation": "utf8mb3_unicode_ci",
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": "(DC2Type:guid)"
  },
  "redeliver_after": {
    "Field": "redeliver_after",
    "Type": "bigint(20)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  }
}