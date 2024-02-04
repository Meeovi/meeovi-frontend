import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionCreateInput } from "../../../inputs/Order_transaction_capture_refund_positionCreateInput";
import { Order_transaction_capture_refund_positionUpdateInput } from "../../../inputs/Order_transaction_capture_refund_positionUpdateInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereUniqueInput, {
    nullable: false
  })
  where!: Order_transaction_capture_refund_positionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionCreateInput, {
    nullable: false
  })
  create!: Order_transaction_capture_refund_positionCreateInput;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionUpdateInput, {
    nullable: false
  })
  update!: Order_transaction_capture_refund_positionUpdateInput;
}
