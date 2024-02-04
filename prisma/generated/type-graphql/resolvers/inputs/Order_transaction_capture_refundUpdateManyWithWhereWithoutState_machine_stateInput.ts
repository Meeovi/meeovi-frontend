import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_capture_refundScalarWhereInput } from "../inputs/Order_transaction_capture_refundScalarWhereInput";
import { Order_transaction_capture_refundUpdateManyMutationInput } from "../inputs/Order_transaction_capture_refundUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_transaction_capture_refundUpdateManyWithWhereWithoutState_machine_stateInput", {})
export class Order_transaction_capture_refundUpdateManyWithWhereWithoutState_machine_stateInput {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundScalarWhereInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refundScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_transaction_capture_refundUpdateManyMutationInput;
}
