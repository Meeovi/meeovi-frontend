import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_run_logCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_run_logCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channel_run_logArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_run_logCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_run_logCreateInput;
}
