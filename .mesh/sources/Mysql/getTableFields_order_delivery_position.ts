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
  "order_delivery_id": {
    "Field": "order_delivery_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "order_delivery_version_id": {
    "Field": "order_delivery_version_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "order_line_item_id": {
    "Field": "order_line_item_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "MUL",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "order_line_item_version_id": {
    "Field": "order_line_item_version_id",
    "Type": "binary(16)",
    "Collation": null,
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "price": {
    "Field": "price",
    "Type": "longtext",
    "Collation": "utf8mb4_bin",
    "Null": "NO",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "total_price": {
    "Field": "total_price",
    "Type": "int(11)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "VIRTUAL GENERATED",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "unit_price": {
    "Field": "unit_price",
    "Type": "int(11)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "VIRTUAL GENERATED",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "quantity": {
    "Field": "quantity",
    "Type": "int(11)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "VIRTUAL GENERATED",
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