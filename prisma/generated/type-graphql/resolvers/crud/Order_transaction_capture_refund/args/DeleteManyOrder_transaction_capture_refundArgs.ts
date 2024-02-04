import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundWhereInput } from "../../../inputs/Order_transaction_capture_refundWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrder_transaction_capture_refundArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refundWhereInput | undefined;
}
