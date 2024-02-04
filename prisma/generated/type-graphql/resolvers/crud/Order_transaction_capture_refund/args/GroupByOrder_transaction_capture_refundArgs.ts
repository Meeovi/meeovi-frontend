import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refundOrderByWithAggregationInput } from "../../../inputs/Order_transaction_capture_refundOrderByWithAggregationInput";
import { Order_transaction_capture_refundScalarWhereWithAggregatesInput } from "../../../inputs/Order_transaction_capture_refundScalarWhereWithAggregatesInput";
import { Order_transaction_capture_refundWhereInput } from "../../../inputs/Order_transaction_capture_refundWhereInput";
import { Order_transaction_capture_refundScalarFieldEnum } from "../../../../enums/Order_transaction_capture_refundScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_transaction_capture_refundArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refundWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refundWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_transaction_capture_refundOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refundScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "capture_id" | "capture_version_id" | "state_id" | "reason" | "amount" | "custom_fields" | "external_reference" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_transaction_capture_refundScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
