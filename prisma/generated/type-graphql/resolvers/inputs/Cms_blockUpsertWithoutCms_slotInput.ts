import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateWithoutCms_slotInput } from "../inputs/Cms_blockCreateWithoutCms_slotInput";
import { Cms_blockUpdateWithoutCms_slotInput } from "../inputs/Cms_blockUpdateWithoutCms_slotInput";
import { Cms_blockWhereInput } from "../inputs/Cms_blockWhereInput";

@TypeGraphQL.InputType("Cms_blockUpsertWithoutCms_slotInput", {})
export class Cms_blockUpsertWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => Cms_blockUpdateWithoutCms_slotInput, {
    nullable: false
  })
  update!: Cms_blockUpdateWithoutCms_slotInput;

  @TypeGraphQL.Field(_type => Cms_blockCreateWithoutCms_slotInput, {
    nullable: false
  })
  create!: Cms_blockCreateWithoutCms_slotInput;

  @TypeGraphQL.Field(_type => Cms_blockWhereInput, {
    nullable: true
  })
  where?: Cms_blockWhereInput | undefined;
}
