import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrder_transaction_capture_refundOrThrowArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refundWhereUniqueInput;
}
