import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refund_positionWhereUniqueInput;
}
