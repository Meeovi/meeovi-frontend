import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryCreateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_inventoryCreateInput;
}
