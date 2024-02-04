import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsUpdateInput } from "../../../inputs/Customer_group_registration_sales_channelsUpdateInput";
import { Customer_group_registration_sales_channelsWhereUniqueInput } from "../../../inputs/Customer_group_registration_sales_channelsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateInput, {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsUpdateInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_registration_sales_channelsWhereUniqueInput;
}
