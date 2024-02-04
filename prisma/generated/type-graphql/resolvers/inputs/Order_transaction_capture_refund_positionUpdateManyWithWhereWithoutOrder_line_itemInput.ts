import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refund_positionScalarWhereInput } from "../inputs/Order_transaction_capture_refund_positionScalarWhereInput";
import { Order_transaction_capture_refund_positionUpdateManyMutationInput } from "../inputs/Order_transaction_capture_refund_positionUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput", {})
export class Order_transaction_capture_refund_positionUpdateManyWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionScalarWhereInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refund_positionScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transaction_capture_refund_positionUpdateManyMutationInput;
}
