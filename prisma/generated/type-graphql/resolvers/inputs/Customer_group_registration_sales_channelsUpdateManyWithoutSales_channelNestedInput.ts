import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope } from "../inputs/Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope";
import { Customer_group_registration_sales_channelsCreateOrConnectWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsCreateOrConnectWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsCreateWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsCreateWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsScalarWhereInput } from "../inputs/Customer_group_registration_sales_channelsScalarWhereInput";
import { Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpdateManyWithoutSales_channelNestedInput", {})
export class Customer_group_registration_sales_channelsUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Customer_group_registration_sales_channelsCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_registration_sales_channelsCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_registration_sales_channelsCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_registration_sales_channelsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Customer_group_registration_sales_channelsUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_group_registration_sales_channelsScalarWhereInput[] | undefined;
}
