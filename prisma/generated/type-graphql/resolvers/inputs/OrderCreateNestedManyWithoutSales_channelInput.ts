import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySales_channelInputEnvelope } from "../inputs/OrderCreateManySales_channelInputEnvelope";
import { OrderCreateOrConnectWithoutSales_channelInput } from "../inputs/OrderCreateOrConnectWithoutSales_channelInput";
import { OrderCreateWithoutSales_channelInput } from "../inputs/OrderCreateWithoutSales_channelInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderCreateNestedManyWithoutSales_channelInput", {})
export class OrderCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: OrderCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;
}
