import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Order_deliveryRelationFilter } from "../inputs/Order_deliveryRelationFilter";
import { Order_delivery_positionWhereInput } from "../inputs/Order_delivery_positionWhereInput";
import { Order_line_itemRelationFilter } from "../inputs/Order_line_itemRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { order_delivery_positionIdVersion_idCompoundUniqueInput } from "../inputs/order_delivery_positionIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_delivery_positionWhereUniqueInput", {})
export class Order_delivery_positionWhereUniqueInput {
  @TypeGraphQL.Field(_type => order_delivery_positionIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: order_delivery_positionIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereInput], {
    nullable: true
  })
  AND?: Order_delivery_positionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereInput], {
    nullable: true
  })
  OR?: Order_delivery_positionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionWhereInput], {
    nullable: true
  })
  NOT?: Order_delivery_positionWhereInput[] | undefined;

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
  order_delivery_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_delivery_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  price?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  total_price?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  unit_price?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  quantity?: IntNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Order_deliveryRelationFilter, {
    nullable: true
  })
  order_delivery?: Order_deliveryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemRelationFilter | undefined;
}
