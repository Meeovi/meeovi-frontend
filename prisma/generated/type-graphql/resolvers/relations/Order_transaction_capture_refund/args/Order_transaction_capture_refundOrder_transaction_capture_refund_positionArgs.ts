import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_capture_refund_positionWhereInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereInput";
import { Order_transaction_capture_refund_positionWhereUniqueInput } from "../../../inputs/Order_transaction_capture_refund_positionWhereUniqueInput";
import { Order_transaction_capture_refund_positionScalarFieldEnum } from "../../../../enums/Order_transaction_capture_refund_positionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Order_transaction_capture_refundOrder_transaction_capture_refund_positionArgs {
  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereInput, {
    nullable: true
  })
  where?: Order_transaction_capture_refund_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_transaction_capture_refund_positionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_transaction_capture_refund_positionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "refund_id" | "refund_version_id" | "order_line_item_id" | "order_line_item_version_id" | "quantity" | "reason" | "external_reference" | "amount" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
