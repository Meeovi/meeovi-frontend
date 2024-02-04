import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingUpdateWithoutCurrencyInput } from "../inputs/Currency_country_roundingUpdateWithoutCurrencyInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput", {})
export class Currency_country_roundingUpdateWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_country_roundingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateWithoutCurrencyInput, {
    nullable: false
  })
  data!: Currency_country_roundingUpdateWithoutCurrencyInput;
}
