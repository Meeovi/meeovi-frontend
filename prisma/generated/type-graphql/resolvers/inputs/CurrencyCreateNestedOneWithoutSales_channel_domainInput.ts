import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutSales_channel_domainInput } from "../inputs/CurrencyCreateOrConnectWithoutSales_channel_domainInput";
import { CurrencyCreateWithoutSales_channel_domainInput } from "../inputs/CurrencyCreateWithoutSales_channel_domainInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutSales_channel_domainInput", {})
export class CurrencyCreateNestedOneWithoutSales_channel_domainInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channel_domainInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutSales_channel_domainInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutSales_channel_domainInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutSales_channel_domainInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
