import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionCreateInput } from "../../../inputs/Order_transaction_capture_refund_positionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateInput, {
    nullable: false
  })
  data!: Order_transaction_capture_refund_positionCreateInput;
}
