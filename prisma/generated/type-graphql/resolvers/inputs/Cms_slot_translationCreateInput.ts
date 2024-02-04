import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCreateNestedOneWithoutCms_slot_translationInput } from "../inputs/Cms_slotCreateNestedOneWithoutCms_slot_translationInput";
import { LanguageCreateNestedOneWithoutCms_slot_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCms_slot_translationInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateInput", {})
export class Cms_slot_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCreateNestedOneWithoutCms_slot_translationInput, {
    nullable: false
  })
  cms_slot!: Cms_slotCreateNestedOneWithoutCms_slot_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCms_slot_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCms_slot_translationInput;
}
