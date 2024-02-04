import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelOrderByWithAggregationInput } from "../../../inputs/Swag_paypal_pos_sales_channelOrderByWithAggregationInput";
import { Swag_paypal_pos_sales_channelScalarWhereWithAggregatesInput } from "../../../inputs/Swag_paypal_pos_sales_channelScalarWhereWithAggregatesInput";
import { Swag_paypal_pos_sales_channelWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channelWhereInput";
import { Swag_paypal_pos_sales_channelScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "sales_channel_id" | "product_stream_id" | "api_key" | "media_domain" | "webhook_signing_key" | "sync_prices" | "replace" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Swag_paypal_pos_sales_channelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
