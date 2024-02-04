import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_runCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_runCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channel_runArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_runCreateInput;
}
