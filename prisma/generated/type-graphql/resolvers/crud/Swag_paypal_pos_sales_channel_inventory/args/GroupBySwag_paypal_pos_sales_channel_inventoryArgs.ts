import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channel_inventoryScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereInput";
import { Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channel_inventoryArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_inventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_inventoryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_inventoryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "product_id" | "product_version_id" | "stock" | "updated_at">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channel_inventoryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
