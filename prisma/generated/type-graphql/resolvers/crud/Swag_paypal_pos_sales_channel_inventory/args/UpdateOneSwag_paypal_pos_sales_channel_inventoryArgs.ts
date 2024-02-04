import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryUpdateInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryUpdateInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryUpdateInput, {
    nullable: false
  })
  data!: Swag_paypal_pos_sales_channel_inventoryUpdateInput;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput, {
    nullable: false
  })
  where!: Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput;
}
