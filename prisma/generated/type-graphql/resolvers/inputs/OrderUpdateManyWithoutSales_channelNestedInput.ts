import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManySales_channelInputEnvelope } from "../inputs/OrderCreateManySales_channelInputEnvelope";
import { OrderCreateOrConnectWithoutSales_channelInput } from "../inputs/OrderCreateOrConnectWithoutSales_channelInput";
import { OrderCreateWithoutSales_channelInput } from "../inputs/OrderCreateWithoutSales_channelInput";
import { OrderScalarWhereInput } from "../inputs/OrderScalarWhereInput";
import { OrderUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/OrderUpdateManyWithWhereWithoutSales_channelInput";
import { OrderUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/OrderUpdateWithWhereUniqueWithoutSales_channelInput";
import { OrderUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/OrderUpsertWithWhereUniqueWithoutSales_channelInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType("OrderUpdateManyWithoutSales_channelNestedInput", {})
export class OrderUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [OrderCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: OrderCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: OrderUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: OrderCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  set?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: OrderUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: OrderUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderScalarWhereInput[] | undefined;
}
