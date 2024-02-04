import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateWithoutCms_slotInput } from "../inputs/Cms_slot_translationCreateWithoutCms_slotInput";
import { Cms_slot_translationUpdateWithoutCms_slotInput } from "../inputs/Cms_slot_translationUpdateWithoutCms_slotInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput", {})
export class Cms_slot_translationUpsertWithWhereUniqueWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateWithoutCms_slotInput, {
    nullable: false
  })
  update!: Cms_slot_translationUpdateWithoutCms_slotInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateWithoutCms_slotInput, {
    nullable: false
  })
  create!: Cms_slot_translationCreateWithoutCms_slotInput;
}
