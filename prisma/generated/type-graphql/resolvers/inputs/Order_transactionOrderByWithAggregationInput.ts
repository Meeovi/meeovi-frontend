import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transactionCountOrderByAggregateInput } from "../inputs/Order_transactionCountOrderByAggregateInput";
import { Order_transactionMaxOrderByAggregateInput } from "../inputs/Order_transactionMaxOrderByAggregateInput";
import { Order_transactionMinOrderByAggregateInput } from "../inputs/Order_transactionMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_transactionOrderByWithAggregationInput", {})
export class Order_transactionOrderByWithAggregationInput {
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
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Order_transactionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_transactionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_transactionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_transactionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_transactionMinOrderByAggregateInput | undefined;
}
