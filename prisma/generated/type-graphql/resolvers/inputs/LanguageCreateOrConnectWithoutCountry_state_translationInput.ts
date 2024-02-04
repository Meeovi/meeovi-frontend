import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCountry_state_translationInput } from "../inputs/LanguageCreateWithoutCountry_state_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutCountry_state_translationInput", {})
export class LanguageCreateOrConnectWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_state_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCountry_state_translationInput;
}
