import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutTax_rule_type_translationInput } from "../inputs/LanguageCreateWithoutTax_rule_type_translationInput";
import { LanguageUpdateWithoutTax_rule_type_translationInput } from "../inputs/LanguageUpdateWithoutTax_rule_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutTax_rule_type_translationInput", {})
export class LanguageUpsertWithoutTax_rule_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTax_rule_type_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutTax_rule_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutTax_rule_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutTax_rule_type_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
