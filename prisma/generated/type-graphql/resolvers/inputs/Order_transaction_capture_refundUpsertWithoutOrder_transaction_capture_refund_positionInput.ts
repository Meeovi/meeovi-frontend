import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundUpdateWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundUpdateWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundWhereInput } from "../inputs/Order_transaction_capture_refundWhereInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput", {})
export class Order_transaction_capture_refundUpsertWithoutOrder_transaction_capture_refund_positionInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: false
  })
  update!: Order_transaction_capture_refundUpdateWithoutOrder_transaction_capture_refund_positionInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refundWhereInput | undefined;
}
