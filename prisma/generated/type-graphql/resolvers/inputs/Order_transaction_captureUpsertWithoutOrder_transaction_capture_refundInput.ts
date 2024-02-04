import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput } from "../inputs/Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput";
import { Order_transaction_captureWhereInput } from "../inputs/Order_transaction_captureWhereInput";

@TypeGraphQL.InputType("Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput", {})
export class Order_transaction_captureUpsertWithoutOrder_transaction_capture_refundInput {
  @TypeGraphQL.Field(_type => Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput, {
    nullable: false
  })
  update!: Order_transaction_captureUpdateWithoutOrder_transaction_capture_refundInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput, {
    nullable: false
  })
  create!: Order_transaction_captureCreateWithoutOrder_transaction_capture_refundInput;

  @TypeGraphQL.Field(_type => Order_transaction_captureWhereInput, {
    nullable: true
  })
  where?: Order_transaction_captureWhereInput | undefined;
}
