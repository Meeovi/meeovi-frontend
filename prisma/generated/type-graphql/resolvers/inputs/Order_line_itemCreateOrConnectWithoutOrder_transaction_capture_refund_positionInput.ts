import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput } from "../inputs/Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput";
import { Order_line_itemWhereUniqueInput } from "../inputs/Order_line_itemWhereUniqueInput";

@TypeGraphQL.InputType("Order_line_itemCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput", {})
export class Order_line_itemCreateOrConnectWithoutOrder_transaction_capture_refund_positionInput {
  @TypeGraphQL.Field(_type => Order_line_itemWhereUniqueInput, {
    nullable: false
  })
  where!: Order_line_itemWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput, {
    nullable: false
  })
  create!: Order_line_itemCreateWithoutOrder_transaction_capture_refund_positionInput;
}
