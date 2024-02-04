import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutTax_rule_type_translationInput } from "../inputs/LanguageUpdateWithoutTax_rule_type_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutTax_rule_type_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutTax_rule_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTax_rule_type_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutTax_rule_type_translationInput;
}
