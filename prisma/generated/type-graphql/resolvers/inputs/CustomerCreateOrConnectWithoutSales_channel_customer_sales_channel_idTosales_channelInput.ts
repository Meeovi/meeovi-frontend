import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput", {})
export class CustomerCreateOrConnectWithoutSales_channel_customer_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutSales_channel_customer_sales_channel_idTosales_channelInput;
}
