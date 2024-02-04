import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_run_logUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logUpdateInput";
import { Swag_paypal_pos_sales_channel_run_logWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSwag_paypal_pos_sales_channel_run_logArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logUpdateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_run_logUpdateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_run_logWhereUniqueInput;
}
