import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCms_slot_translationInput } from "../inputs/LanguageCreateWithoutCms_slot_translationInput";
import { LanguageUpdateWithoutCms_slot_translationInput } from "../inputs/LanguageUpdateWithoutCms_slot_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCms_slot_translationInput", {})
export class LanguageUpsertWithoutCms_slot_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCms_slot_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCms_slot_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCms_slot_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCms_slot_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
