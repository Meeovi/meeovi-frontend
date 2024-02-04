import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutTax_rule_type_translationInput } from "../inputs/LanguageCreateOrConnectWithoutTax_rule_type_translationInput";
import { LanguageCreateWithoutTax_rule_type_translationInput } from "../inputs/LanguageCreateWithoutTax_rule_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutTax_rule_type_translationInput", {})
export class LanguageCreateNestedOneWithoutTax_rule_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_rule_type_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutTax_rule_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutTax_rule_type_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutTax_rule_type_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
