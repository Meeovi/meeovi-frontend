import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsUpdateWithoutCustomer_groupInput } from "../inputs/Customer_group_registration_sales_channelsUpdateWithoutCustomer_groupInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput", {})
export class Customer_group_registration_sales_channelsUpsertWithWhereUniqueWithoutCustomer_groupInput {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_registration_sales_channelsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateWithoutCustomer_groupInput, {
    nullable: false
  })
  update!: Customer_group_registration_sales_channelsUpdateWithoutCustomer_groupInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput, {
    nullable: false
  })
  create!: Customer_group_registration_sales_channelsCreateWithoutCustomer_groupInput;
}
