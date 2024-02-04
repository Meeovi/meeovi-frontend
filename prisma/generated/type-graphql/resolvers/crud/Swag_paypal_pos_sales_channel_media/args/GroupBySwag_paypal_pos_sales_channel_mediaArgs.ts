import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channel_mediaOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channel_mediaScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channel_mediaWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channel_mediaWhereInput";
import { Swag_paypal_pos_sales_channel_mediaScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channel_mediaScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channel_mediaArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channel_mediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_mediaOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channel_mediaOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channel_mediaScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"sales_channel_id" | "media_id" | "lookup_key" | "url" | "created_at">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_mediaScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channel_mediaScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
