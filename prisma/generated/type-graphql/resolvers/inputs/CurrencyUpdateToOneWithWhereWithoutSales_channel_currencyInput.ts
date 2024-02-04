import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyUpdateWithoutSales_channel_currencyInput } from "../inputs/CurrencyUpdateWithoutSales_channel_currencyInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput", {})
export class CurrencyUpdateToOneWithWhereWithoutSales_channel_currencyInput {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channel_currencyInput, {
    nullable: false
  })
  data!: CurrencyUpdateWithoutSales_channel_currencyInput;
}
