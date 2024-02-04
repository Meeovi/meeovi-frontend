import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Event_action_sales_channelCreateManySales_channelInputEnvelope";
import { Event_action_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Event_action_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Event_action_sales_channelCreateWithoutSales_channelInput } from "../inputs/Event_action_sales_channelCreateWithoutSales_channelInput";
import { Event_action_sales_channelScalarWhereInput } from "../inputs/Event_action_sales_channelScalarWhereInput";
import { Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput";
import { Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput";
import { Event_action_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Event_action_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput";
import { Event_action_sales_channelWhereUniqueInput } from "../inputs/Event_action_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Event_action_sales_channelUpdateManyWithoutSales_channelNestedInput", {})
export class Event_action_sales_channelUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Event_action_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Event_action_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Event_action_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Event_action_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Event_action_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  set?: Event_action_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Event_action_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  delete?: Event_action_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Event_action_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Event_action_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Event_action_sales_channelUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Event_action_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Event_action_sales_channelScalarWhereInput[] | undefined;
}
