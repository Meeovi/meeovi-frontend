import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope } from "../inputs/CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope";
import { CustomerCreateOrConnectWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateOrConnectWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerScalarWhereInput } from "../inputs/CustomerScalarWhereInput";
import { CustomerUpdateManyWithWhereWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerUpdateManyWithWhereWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateManyWithoutSales_channel_customer_bound_sales_channel_idTosales_channelNestedInput", {})
export class CustomerUpdateManyWithoutSales_channel_customer_bound_sales_channel_idTosales_channelNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  upsert?: CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManySales_channel_customer_bound_sales_channel_idTosales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  update?: CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerUpdateManyWithWhereWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  updateMany?: CustomerUpdateManyWithWhereWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerScalarWhereInput[] | undefined;
}
