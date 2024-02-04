import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { Order_addressNullableRelationFilter } from "../inputs/Order_addressNullableRelationFilter";
import { Order_delivery_positionListRelationFilter } from "../inputs/Order_delivery_positionListRelationFilter";
import { Shipping_methodRelationFilter } from "../inputs/Shipping_methodRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Order_deliveryWhereInput", {})
export class Order_deliveryWhereInput {
  @TypeGraphQL.Field(_type => [Order_deliveryWhereInput], {
    nullable: true
  })
  AND?: Order_deliveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereInput], {
    nullable: true
  })
  OR?: Order_deliveryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryWhereInput], {
    nullable: true
  })
  NOT?: Order_deliveryWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  state_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  shipping_order_address_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  shipping_order_address_version_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  shipping_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  tracking_codes?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  shipping_date_earliest?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  shipping_date_latest?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  shipping_costs?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodRelationFilter, {
    nullable: true
  })
  shipping_method?: Shipping_methodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_addressNullableRelationFilter, {
    nullable: true
  })
  order_address?: Order_addressNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionListRelationFilter, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionListRelationFilter | undefined;
}
