import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput", {})
export class Order_transaction_capture_refundCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refundWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refundCreateWithoutOrder_transaction_capture_refund_positionInput;
}
