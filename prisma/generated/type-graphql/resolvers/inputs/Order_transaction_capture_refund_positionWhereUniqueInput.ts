import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Order_line_itemRelationFilter } from "../inputs/Order_line_itemRelationFilter";
import { Order_transaction_capture_refundRelationFilter } from "../inputs/Order_transaction_capture_refundRelationFilter";
import { Order_transaction_capture_refund_positionWhereInput } from "../inputs/Order_transaction_capture_refund_positionWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { order_transaction_capture_refund_positionIdVersion_idCompoundUniqueInput } from "../inputs/order_transaction_capture_refund_positionIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionWhereUniqueInput", {})
export class Order_transaction_capture_refund_positionWhereUniqueInput {
  @TypeGraphQL.Field(_type => order_transaction_capture_refund_positionIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: order_transaction_capture_refund_positionIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereInput], {
    nullable: true
  })
  AND?: Order_transaction_capture_refund_positionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereInput], {
    nullable: true
  })
  OR?: Order_transaction_capture_refund_positionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionWhereInput], {
    nullable: true
  })
  NOT?: Order_transaction_capture_refund_positionWhereInput[] | undefined;

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
  refund_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  refund_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_line_item_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  quantity?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reason?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  external_reference?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  amount?: StringFilter | undefined;

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

  @TypeGraphQL.Field(_type => Order_line_itemRelationFilter, {
    nullable: true
  })
  order_line_item?: Order_line_itemRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundRelationFilter, {
    nullable: true
  })
  order_transaction_capture_refund?: Order_transaction_capture_refundRelationFilter | undefined;
}
