import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderUpdateWithoutSales_channelInput } from "../inputs/OrderUpdateWithoutSales_channelInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class OrderUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: false
  })
  where!: OrderWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: OrderUpdateWithoutSales_channelInput;
}
