import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsUpdateManyMutationInput } from "../../../inputs/Customer_group_registration_sales_channelsUpdateManyMutationInput";
import { Customer_group_registration_sales_channelsWhereInput } from "../../../inputs/Customer_group_registration_sales_channelsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsWhereInput, {
    nullable: true
  })
  where?: Customer_group_registration_sales_channelsWhereInput | undefined;
}
