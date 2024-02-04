import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySales_channel_customer_sales_channel_idTosales_channelInputEnvelope } from "../inputs/CustomerCreateManySales_channel_customer_sales_channel_idTosales_channelInputEnvelope";
import { CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput";
import { CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateNestedManyWithoutSales_channel_customer_sales_channel_idTosales_channelInput", {})
export class CustomerCreateNestedManyWithoutSales_channel_customer_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => [CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  create?: CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCreateManySales_channel_customer_sales_channel_idTosales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCreateManySales_channel_customer_sales_channel_idTosales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerWhereUniqueInput[] | undefined;
}
