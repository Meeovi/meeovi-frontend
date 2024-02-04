import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_paymentListRelationFilter } from "../inputs/Adyen_paymentListRelationFilter";
import { Adyen_payment_captureListRelationFilter } from "../inputs/Adyen_payment_captureListRelationFilter";
import { Adyen_refundListRelationFilter } from "../inputs/Adyen_refundListRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { OrderRelationFilter } from "../inputs/OrderRelationFilter";
import { Order_transactionWhereInput } from "../inputs/Order_transactionWhereInput";
import { Order_transaction_captureListRelationFilter } from "../inputs/Order_transaction_captureListRelationFilter";
import { Payment_methodRelationFilter } from "../inputs/Payment_methodRelationFilter";
import { State_machine_stateRelationFilter } from "../inputs/State_machine_stateRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { order_transactionIdVersion_idCompoundUniqueInput } from "../inputs/order_transactionIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Order_transactionWhereUniqueInput", {})
export class Order_transactionWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => order_transactionIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: order_transactionIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereInput], {
    nullable: true
  })
  AND?: Order_transactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereInput], {
    nullable: true
  })
  OR?: Order_transactionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transactionWhereInput], {
    nullable: true
  })
  NOT?: Order_transactionWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  payment_method_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Adyen_paymentListRelationFilter, {
    nullable: true
  })
  adyen_payment?: Adyen_paymentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureListRelationFilter, {
    nullable: true
  })
  adyen_payment_capture?: Adyen_payment_captureListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundListRelationFilter, {
    nullable: true
  })
  adyen_refund?: Adyen_refundListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrderRelationFilter, {
    nullable: true
  })
  order?: OrderRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Payment_methodRelationFilter, {
    nullable: true
  })
  payment_method?: Payment_methodRelationFilter | undefined;

  @TypeGraphQL.Field(_type => State_machine_stateRelationFilter, {
    nullable: true
  })
  state_machine_state?: State_machine_stateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureListRelationFilter, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureListRelationFilter | undefined;
}
