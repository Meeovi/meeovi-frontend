import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateWithoutLanguageInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateOrConnectWithoutLanguageInput", {})
export class Cms_slot_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Cms_slot_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_slot_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Cms_slot_translationCreateWithoutLanguageInput;
}
