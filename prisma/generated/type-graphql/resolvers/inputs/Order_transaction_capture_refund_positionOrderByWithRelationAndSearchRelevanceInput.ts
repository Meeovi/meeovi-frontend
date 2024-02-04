import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_itemOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_line_itemOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput";
import { Order_transaction_capture_refund_positionOrderByRelevanceInput } from "../inputs/Order_transaction_capture_refund_positionOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_transaction_capture_refund_positionOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refund_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  refund_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_line_item_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  reason?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_reference?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  amount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_itemOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_line_item?: Order_line_itemOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_transaction_capture_refund?: Order_transaction_capture_refundOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_capture_refund_positionOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_transaction_capture_refund_positionOrderByRelevanceInput | undefined;
}
