import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundCreateInput } from "../../../inputs/Order_transaction_capture_refundCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneOrder_transaction_capture_refundArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateInput, {
    nullable: false
  })
  data!: Order_transaction_capture_refundCreateInput;
}
