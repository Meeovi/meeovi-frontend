import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput", {})
export class CustomerUpsertWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  update!: CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput;

  @TypeGraphQL.Field(_type => CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  create!: CustomerCreateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput;
}
