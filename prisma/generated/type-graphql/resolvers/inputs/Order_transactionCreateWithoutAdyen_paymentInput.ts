import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput } from "../inputs/Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput";
import { Adyen_refundCreateNestedManyWithoutOrder_transactionInput } from "../inputs/Adyen_refundCreateNestedManyWithoutOrder_transactionInput";
import { OrderCreateNestedOneWithoutOrder_transactionInput } from "../inputs/OrderCreateNestedOneWithoutOrder_transactionInput";
import { Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput } from "../inputs/Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput";
import { Payment_methodCreateNestedOneWithoutOrder_transactionInput } from "../inputs/Payment_methodCreateNestedOneWithoutOrder_transactionInput";
import { State_machine_stateCreateNestedOneWithoutOrder_transactionInput } from "../inputs/State_machine_stateCreateNestedOneWithoutOrder_transactionInput";

@TypeGraphQL.InputType("Order_transactionCreateWithoutAdyen_paymentInput", {})
export class Order_transactionCreateWithoutAdyen_paymentInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput, {
    nullable: true
  })
  adyen_payment_capture?: Adyen_payment_captureCreateNestedManyWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => Adyen_refundCreateNestedManyWithoutOrder_transactionInput, {
    nullable: true
  })
  adyen_refund?: Adyen_refundCreateNestedManyWithoutOrder_transactionInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrder_transactionInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedOneWithoutOrder_transactionInput, {
    nullable: false
  })
  payment_method!: Payment_methodCreateNestedOneWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => State_machine_stateCreateNestedOneWithoutOrder_transactionInput, {
    nullable: false
  })
  state_machine_state!: State_machine_stateCreateNestedOneWithoutOrder_transactionInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput, {
    nullable: true
  })
  order_transaction_capture?: Order_transaction_captureCreateNestedManyWithoutOrder_transactionInput | undefined;
}
