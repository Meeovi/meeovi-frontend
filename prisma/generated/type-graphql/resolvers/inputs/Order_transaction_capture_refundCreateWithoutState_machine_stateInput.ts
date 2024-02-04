import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateNestedOneWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureCreateNestedOneWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundCreateWithoutState_machine_stateInput", {})
export class Order_transaction_capture_refundCreateWithoutState_machine_stateInput {
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
  reason?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_reference?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateNestedOneWithoutOrder_transaction_capture_refundInput, {
    nullable: false
  })
  order_transaction_capture!: Order_transaction_captureCreateNestedOneWithoutOrder_transaction_capture_refundInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput, {
    nullable: true
  })
  order_transaction_capture_refund_position?: Order_transaction_capture_refund_positionCreateNestedManyWithoutOrder_transaction_capture_refundInput | undefined;
}
