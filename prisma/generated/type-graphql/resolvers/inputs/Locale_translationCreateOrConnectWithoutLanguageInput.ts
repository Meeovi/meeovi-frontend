import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateWithoutLanguageInput } from "../inputs/Locale_translationCreateWithoutLanguageInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationCreateOrConnectWithoutLanguageInput", {})
export class Locale_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Locale_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Locale_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Locale_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Locale_translationCreateWithoutLanguageInput;
}
