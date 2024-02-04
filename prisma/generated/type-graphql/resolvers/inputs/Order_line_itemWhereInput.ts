import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { Order_delivery_positionListRelationFilter } from "../inputs/Order_delivery_positionListRelationFilter";
import { Order_line_itemListRelationFilter } from "../inputs/Order_line_itemListRelationFilter";
import { Order_line_itemNullableRelationFilter } from "../inputs/Order_line_itemNullableRelationFilter";
import { Order_line_item_downloadListRelationFilter } from "../inputs/Order_line_item_downloadListRelationFilter";
import { Order_transaction_capture_refund_positionListRelationFilter } from "../inputs/Order_transaction_capture_refund_positionListRelationFilter";
import { ProductNullableRelationFilter } from "../inputs/ProductNullableRelationFilter";
import { PromotionNullableRelationFilter } from "../inputs/PromotionNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Order_line_itemWhereInput", {})
export class Order_line_itemWhereInput {
  @TypeGraphQL.Field(_type => [Order_line_itemWhereInput], {
    nullable: true
  })
  AND?: Order_line_itemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereInput], {
    nullable: true
  })
  OR?: Order_line_itemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_line_itemWhereInput], {
    nullable: true
  })
  NOT?: Order_line_itemWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  identifier?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  referenced_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  product_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  promotion_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  states?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  label?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  cover_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  unit_price?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => FloatNullableFilter, {
    nullable: true
  })
  total_price?: FloatNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  payload?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  price_definition?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  stackable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  removable?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  good?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionListRelationFilter, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemNullableRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemListRelationFilter, {
    nullable: true
  })
  other_order_line_item?: Order_line_itemListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PromotionNullableRelationFilter, {
    nullable: true
  })
  promotion?: PromotionNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductNullableRelationFilter, {
    nullable: true
  })
  product?: ProductNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadListRelationFilter, {
    nullable: true
  })
  order_line_item_download?: Order_line_item_downloadListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionListRelationFilter, {
    nullable: true
  })
  order_transaction_capture_refund_position?: Order_transaction_capture_refund_positionListRelationFilter | undefined;
}
