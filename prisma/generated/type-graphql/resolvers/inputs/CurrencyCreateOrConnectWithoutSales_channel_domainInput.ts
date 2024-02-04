import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutSales_channel_domainInput } from "../inputs/CurrencyCreateWithoutSales_channel_domainInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutSales_channel_domainInput", {})
export class CurrencyCreateOrConnectWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_domainInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutSales_channel_domainInput;
}
