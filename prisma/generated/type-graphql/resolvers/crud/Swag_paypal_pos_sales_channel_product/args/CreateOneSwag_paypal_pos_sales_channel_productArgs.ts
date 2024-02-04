import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channel_productArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_productCreateInput;
}
