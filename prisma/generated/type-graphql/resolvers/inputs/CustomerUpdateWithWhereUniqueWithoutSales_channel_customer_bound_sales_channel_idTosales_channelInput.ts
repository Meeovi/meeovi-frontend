import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput } from "../inputs/CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput";
import { CustomerWhereUniqueInput } from "../inputs/CustomerWhereUniqueInput";

@TypeGraphQL.InputType("CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput", {})
export class CustomerUpdateWithWhereUniqueWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput {
  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutSales_channel_customer_bound_sales_channel_idTosales_channelInput;
}
