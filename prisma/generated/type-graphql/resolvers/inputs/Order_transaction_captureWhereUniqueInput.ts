import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Order_transactionRelationFilter } from "../inputs/Order_transactionRelationFilter";
import { Order_transaction_captureWhereInput } from "../inputs/Order_transaction_captureWhereInput";
import { Order_transaction_capture_refundListRelationFilter } from "../inputs/Order_transaction_capture_refundListRelationFilter";
import { State_machine_stateRelationFilter } from "../inputs/State_machine_stateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { order_transaction_captureIdVersion_idCompoundUniqueInput } from "../inputs/order_transaction_captureIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_transaction_captureWhereUniqueInput", {})
export class Order_transaction_captureWhereUniqueInput {
  @TypeGraphQL.Field(_type => order_transaction_captureIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: order_transaction_captureIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereInput], {
    nullable: true
  })
  AND?: Order_transaction_captureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereInput], {
    nullable: true
  })
  OR?: Order_transaction_captureWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_captureWhereInput], {
    nullable: true
  })
  NOT?: Order_transaction_captureWhereInput[] | undefined;

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
  order_transaction_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  order_transaction_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  state_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Order_transactionRelationFilter, {
    nullable: true
  })
  order_transaction?: Order_transactionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateRelationFilter, {
    nullable: true
  })
  state_machine_state?: State_machine_stateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundListRelationFilter, {
    nullable: true
  })
  order_transaction_capture_refund?: Order_transaction_capture_refundListRelationFilter | undefined;
}
