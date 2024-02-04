import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_registration_sales_channelsScalarWhereInput } from "../inputs/Customer_group_registration_sales_channelsScalarWhereInput";
import { Customer_group_registration_sales_channelsUpdateManyMutationInput } from "../inputs/Customer_group_registration_sales_channelsUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput", {})
export class Customer_group_registration_sales_channelsUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsScalarWhereInput, {
    nullable: false
  })
  where!: Customer_group_registration_sales_channelsScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsUpdateManyMutationInput;
}
