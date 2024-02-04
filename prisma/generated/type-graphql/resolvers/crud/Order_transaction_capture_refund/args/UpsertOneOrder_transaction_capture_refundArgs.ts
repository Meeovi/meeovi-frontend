import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundCreateInput } from "../../../inputs/Order_transaction_capture_refundCreateInput";
import { Order_transaction_capture_refundUpdateInput } from "../../../inputs/Order_transaction_capture_refundUpdateInput";
import { Order_transaction_capture_refundWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refundWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_transaction_capture_refundArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refundWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCreateInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refundCreateInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundUpdateInput, {
    nullable: false
  })
  update!: Order_transaction_capture_refundUpdateInput;
}
