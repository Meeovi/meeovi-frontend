import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_inventoryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereInput";
import { Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput";
import { Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSwag_paypal_pos_sales_channel_inventoryOrThrowArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_inventoryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_inventoryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_inventoryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channel_inventoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_inventoryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sales_channel_id" | "product_id" | "product_version_id" | "stock" | "updated_at"> | undefined;
}
