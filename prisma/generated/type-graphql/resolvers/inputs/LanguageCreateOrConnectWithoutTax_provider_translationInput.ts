import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutTax_provider_translationInput } from "../inputs/LanguageCreateWithoutTax_provider_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutTax_provider_translationInput", {})
export class LanguageCreateOrConnectWithoutTax_provider_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_provider_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutTax_provider_translationInput;
}
