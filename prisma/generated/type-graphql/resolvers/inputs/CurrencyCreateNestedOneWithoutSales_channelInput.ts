import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateOrConnectWithoutSales_channelInput } from "../inputs/CurrencyCreateOrConnectWithoutSales_channelInput";
import { CurrencyCreateWithoutSales_channelInput } from "../inputs/CurrencyCreateWithoutSales_channelInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateNestedOneWithoutSales_channelInput", {})
export class CurrencyCreateNestedOneWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => CurrencyCreateWithoutSales_channelInput, {
    nullable: true
  })
  create?: CurrencyCreateWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyCreateOrConnectWithoutSales_channelInput, {
    nullable: true
  })
  connectOrCreate?: CurrencyCreateOrConnectWithoutSales_channelInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  connect?: CurrencyWhereUniqueInput | undefined;
}
