import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateWithoutCms_slot_translationInput";
import { Cms_slotUpdateWithoutCms_slot_translationInput } from "../inputs/Cms_slotUpdateWithoutCms_slot_translationInput";
import { Cms_slotWhereInput } from "../inputs/Cms_slotWhereInput";

@TypeGraphQL.InputType("Cms_slotUpsertWithoutCms_slot_translationInput", {})
export class Cms_slotUpsertWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => Cms_slotUpdateWithoutCms_slot_translationInput, {
    nullable: false
  })
  update!: Cms_slotUpdateWithoutCms_slot_translationInput;

  @TypeGraphQL.Field(_type => Cms_slotCreateWithoutCms_slot_translationInput, {
    nullable: false
  })
  create!: Cms_slotCreateWithoutCms_slot_translationInput;

  @TypeGraphQL.Field(_type => Cms_slotWhereInput, {
    nullable: true
  })
  where?: Cms_slotWhereInput | undefined;
}
