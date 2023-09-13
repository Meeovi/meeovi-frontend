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
  "version_id": {
    "Field": "version_id",
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
    "Type": "int(11)",
    "Collation": null,
    "Null": "NO",
    "Key": "UNI",
    "Default": null,
    "Extra": "auto_increment",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "parent_id": {
    "Field": "parent_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "parent_version_id": {
    "Field": "parent_version_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
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
  "cms_page_id": {
    "Field": "cms_page_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "cms_page_version_id": {
    "Field": "cms_page_version_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "\u000f?\u001c??jK¾K??u,4%",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "product_stream_id": {
    "Field": "product_stream_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "product_assignment_type": {
    "Field": "product_assignment_type",
    "Type": "varchar(32)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
    "Key": "",
    "Default": "product",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "path": {
    "Field": "path",
    "Type": "longtext",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "after_category_id": {
    "Field": "after_category_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "after_category_version_id": {
    "Field": "after_category_version_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "level": {
    "Field": "level",
    "Type": "int(11) unsigned",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "active": {
    "Field": "active",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "child_count": {
    "Field": "child_count",
    "Type": "int(11) unsigned",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "display_nested_products": {
    "Field": "display_nested_products",
    "Type": "tinyint(1) unsigned",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "visible": {
    "Field": "visible",
    "Type": "tinyint(1) unsigned",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "type": {
    "Field": "type",
    "Type": "varchar(32)",
    "Collation": "utf8mb4_unicode_ci",
    "Null": "NO",
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