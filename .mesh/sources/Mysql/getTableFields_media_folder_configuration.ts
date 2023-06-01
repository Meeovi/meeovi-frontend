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
  "create_thumbnails": {
    "Field": "create_thumbnails",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "thumbnail_quality": {
    "Field": "thumbnail_quality",
    "Type": "int(11)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "80",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "media_thumbnail_sizes_ro": {
    "Field": "media_thumbnail_sizes_ro",
    "Type": "longblob",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": null,
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "keep_aspect_ratio": {
    "Field": "keep_aspect_ratio",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "1",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "private": {
    "Field": "private",
    "Type": "tinyint(1)",
    "Collation": null,
    "Null": "YES",
    "Key": "",
    "Default": "0",
    "Extra": "",
    "Privileges": "select,insert,update,references",
    "Comment": ""
  },
  "no_association": {
    "Field": "no_association",
    "Type": "tinyint(1)",
    "Collation": null,
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