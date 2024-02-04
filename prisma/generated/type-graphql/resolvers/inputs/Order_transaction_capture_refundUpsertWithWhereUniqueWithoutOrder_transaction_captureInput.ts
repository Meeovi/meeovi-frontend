import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundUpdateWithoutOrder_transaction_captureInput } from "../inputs/Order_transaction_capture_refundUpdateWithoutOrder_transaction_captureInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput", {})
export class Order_transaction_capture_refundUpsertWithWhereUniqueWithoutOrder_transaction_captureInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refundWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  update!: Order_transaction_capture_refundUpdateWithoutOrder_transaction_captureInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refundCreateWithoutOrder_transaction_captureInput;
}
