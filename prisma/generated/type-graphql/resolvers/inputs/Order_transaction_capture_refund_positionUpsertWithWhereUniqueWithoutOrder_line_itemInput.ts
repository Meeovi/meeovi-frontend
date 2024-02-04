import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionUpdateWithoutOrder_line_itemInput } from "../inputs/Order_transaction_capture_refund_positionUpdateWithoutOrder_line_itemInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput", {})
export class Order_transaction_capture_refund_positionUpsertWithWhereUniqueWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refund_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: Order_transaction_capture_refund_positionUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refund_positionCreateWithoutOrder_line_itemInput;
}
