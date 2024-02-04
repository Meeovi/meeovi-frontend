import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCreateNestedOneWithoutOrder_transaction_captureInput } from "../inputs/Order_transactionCreateNestedOneWithoutOrder_transaction_captureInput";
import { State_machine_stateCreateNestedOneWithoutOrder_transaction_captureInput } from "../inputs/State_machine_stateCreateNestedOneWithoutOrder_transaction_captureInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput", {})
export class Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_reference?: string | undefined;

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

  @TypeGraphQL.Field(_type => Order_transactionCreateNestedOneWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  order_transaction!: Order_transactionCreateNestedOneWithoutOrder_transaction_captureInput;

  @TypeGraphQL.Field(_type => State_machine_stateCreateNestedOneWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  state_machine_state!: State_machine_stateCreateNestedOneWithoutOrder_transaction_captureInput;
}
