import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutCurrency_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCurrency_translationInput";

@TypeGraphQL.InputType("Currency_translationCreateWithoutCurrencyInput", {})
export class Currency_translationCreateWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  short_name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCurrency_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCurrency_translationInput;
}
