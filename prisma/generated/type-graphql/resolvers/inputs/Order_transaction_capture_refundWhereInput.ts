import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Order_transaction_captureRelationFilter } from "../inputs/Order_transaction_captureRelationFilter";
import { Order_transaction_capture_refund_positionListRelationFilter } from "../inputs/Order_transaction_capture_refund_positionListRelationFilter";
import { State_machine_stateRelationFilter } from "../inputs/State_machine_stateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Order_transaction_capture_refundWhereInput", {})
export class Order_transaction_capture_refundWhereInput {
  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereInput], {
    nullable: true
  })
  AND?: Order_transaction_capture_refundWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereInput], {
    nullable: true
  })
  OR?: Order_transaction_capture_refundWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundWhereInput], {
    nullable: true
  })
  NOT?: Order_transaction_capture_refundWhereInput[] | undefined;

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
  capture_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  capture_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  state_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reason?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  amount?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  external_reference?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureRelationFilter, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureRelationFilter | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateRelationFilter, {
    nullable: true
  })
  state_machine_state?: State_machine_stateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionListRelationFilter, {
    nullable: true
  })
  order_transaction_capture_refund_position?: Order_transaction_capture_refund_positionListRelationFilter | undefined;
}
