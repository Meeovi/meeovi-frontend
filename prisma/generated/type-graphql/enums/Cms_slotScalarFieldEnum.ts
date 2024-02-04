import * as TypeGraphQL from "type-graphql";

export enum Cms_slotScalarFieldEnum {
  id = "id",
  version_id = "version_id",
  cms_block_id = "cms_block_id",
  cms_block_version_id = "cms_block_version_id",
  type = "type",
  slot = "slot",
  locked = "locked",
  created_at = "created_at",
  updated_at = "updated_at"
}
TypeGraphQL.registerEnumType(Cms_slotScalarFieldEnum, {
  name: "Cms_slotScalarFieldEnum",
  description: undefined,
});
