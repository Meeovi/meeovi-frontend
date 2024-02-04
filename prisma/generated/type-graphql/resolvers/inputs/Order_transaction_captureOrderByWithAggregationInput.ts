import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCountOrderByAggregateInput } from "../inputs/Order_transaction_captureCountOrderByAggregateInput";
import { Order_transaction_captureMaxOrderByAggregateInput } from "../inputs/Order_transaction_captureMaxOrderByAggregateInput";
import { Order_transaction_captureMinOrderByAggregateInput } from "../inputs/Order_transaction_captureMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transaction_captureOrderByWithAggregationInput", {})
export class Order_transaction_captureOrderByWithAggregationInput {
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
  order_transaction_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_transaction_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Order_transaction_captureCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_transaction_captureCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_transaction_captureMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transaction_captureMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_transaction_captureMinOrderByAggregateInput | undefined;
}
