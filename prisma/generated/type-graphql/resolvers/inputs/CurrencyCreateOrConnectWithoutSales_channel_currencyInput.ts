import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutSales_channel_currencyInput } from "../inputs/CurrencyCreateWithoutSales_channel_currencyInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutSales_channel_currencyInput", {})
export class CurrencyCreateOrConnectWithoutSales_channel_currencyInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_currencyInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutSales_channel_currencyInput;
}
