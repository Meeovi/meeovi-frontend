import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionWhereInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refund_positionWhereInput | undefined;
}
