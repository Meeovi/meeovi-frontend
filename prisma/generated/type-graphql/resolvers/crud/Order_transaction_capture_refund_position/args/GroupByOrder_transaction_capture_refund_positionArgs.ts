import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionOrderByWithAggregationInput } from "../../../inputs/Order_transaction_capture_refund_positionOrderByWithAggregationInput";
import { Order_transaction_capture_refund_positionScalarWhereWithAggregatesInput } from "../../../inputs/Order_transaction_capture_refund_positionScalarWhereWithAggregatesInput";
import { Order_transaction_capture_refund_positionWhereInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereInput";
import { Order_transaction_capture_refund_positionScalarFieldEnum } from "../../../../enums/Order_transaction_capture_refund_positionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refund_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_transaction_capture_refund_positionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "refund_id" | "refund_version_id" | "order_line_item_id" | "order_line_item_version_id" | "quantity" | "reason" | "external_reference" | "amount" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_transaction_capture_refund_positionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
