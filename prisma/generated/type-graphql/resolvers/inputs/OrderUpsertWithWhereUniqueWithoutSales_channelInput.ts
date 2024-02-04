import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutSales_channelInput } from "../inputs/OrderCreateWithoutSales_channelInput";
import { OrderUpdateWithoutSales_channelInput } from "../inputs/OrderUpdateWithoutSales_channelInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class OrderUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: OrderCreateWithoutSales_channelInput;
}
