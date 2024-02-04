import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutTax_rule_type_translationInput } from "../inputs/LanguageCreateWithoutTax_rule_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutTax_rule_type_translationInput", {})
export class LanguageCreateOrConnectWithoutTax_rule_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_rule_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutTax_rule_type_translationInput;
}
