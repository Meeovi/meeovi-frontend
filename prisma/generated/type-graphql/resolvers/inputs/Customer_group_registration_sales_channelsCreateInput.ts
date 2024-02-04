import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput";
import { Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsCreateInput", {})
export class Customer_group_registration_sales_channelsCreateInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: false
  })
  customer_group!: Customer_groupCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput;
}
