import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsCreateInput } from "../../../inputs/Customer_group_registration_sales_channelsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsCreateInput, {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsCreateInput;
}
