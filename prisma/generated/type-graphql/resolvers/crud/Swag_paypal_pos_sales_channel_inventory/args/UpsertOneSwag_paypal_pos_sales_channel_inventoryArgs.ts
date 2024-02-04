import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryCreateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryCreateInput";
import { Swag_paypal_pos_sales_channel_inventoryUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryUpdateInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryCreateInput, {
    nullable: false
  })
  create!: Swag_paypal_pos_sales_channel_inventoryCreateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryUpdateInput, {
    nullable: false
  })
  update!: Swag_paypal_pos_sales_channel_inventoryUpdateInput;
}
