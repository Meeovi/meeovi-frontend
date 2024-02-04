import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_productOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channel_productScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channel_productWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_productWhereInput";
import { Swag_paypal_pos_sales_channel_productScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_productScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channel_productArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_productWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_productOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_productOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_productScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "product_id" | "product_version_id" | "checksum" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_productScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channel_productScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
