import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateWithoutLanguageInput";
import { Cms_slot_translationUpdateWithoutLanguageInput } from "../inputs/Cms_slot_translationUpdateWithoutLanguageInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Cms_slot_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Cms_slot_translationCreateWithoutLanguageInput;
}
