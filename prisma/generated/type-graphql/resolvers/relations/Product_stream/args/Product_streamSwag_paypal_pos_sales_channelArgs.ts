import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Swag_paypal_pos_sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Swag_paypal_pos_sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Swag_paypal_pos_sales_channelWhereInput } from "../../../inputs/Swag_paypal_pos_sales_channelWhereInput";
import { Swag_paypal_pos_sales_channelWhereUniqueInput } from "../../../inputs/Swag_paypal_pos_sales_channelWhereUniqueInput";
import { Swag_paypal_pos_sales_channelScalarFieldEnum } from "../../../../enums/Swag_paypal_pos_sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Product_streamSwag_paypal_pos_sales_channelArgs {
  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelWhereInput, {
    nullable: true
  })
  where?: Swag_paypal_pos_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Swag_paypal_pos_sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Swag_paypal_pos_sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Swag_paypal_pos_sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "sales_channel_id" | "product_stream_id" | "api_key" | "media_domain" | "webhook_signing_key" | "sync_prices" | "replace" | "created_at" | "updated_at"> | undefined;
}
