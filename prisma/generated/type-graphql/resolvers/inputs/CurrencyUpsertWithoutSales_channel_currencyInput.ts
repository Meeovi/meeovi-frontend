import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutSales_channel_currencyInput } from "../inputs/CurrencyCreateWithoutSales_channel_currencyInput";
import { CurrencyUpdateWithoutSales_channel_currencyInput } from "../inputs/CurrencyUpdateWithoutSales_channel_currencyInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutSales_channel_currencyInput", {})
export class CurrencyUpsertWithoutSales_channel_currencyInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutSales_channel_currencyInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutSales_channel_currencyInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_currencyInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutSales_channel_currencyInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
