import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateNestedOneWithoutCurrency_country_roundingInput";

@TypeGraphQL.InputType("Currency_country_roundingCreateWithoutCurrencyInput", {})
export class Currency_country_roundingCreateWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  item_rounding!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  total_rounding!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutCurrency_country_roundingInput;
}
