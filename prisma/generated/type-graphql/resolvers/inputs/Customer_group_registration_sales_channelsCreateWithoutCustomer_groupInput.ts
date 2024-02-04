import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput } from "../inputs/Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput", {})
export class Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutCustomer_group_registration_sales_channelsInput;
}
