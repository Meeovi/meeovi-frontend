import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_tagCountOrderByAggregateInput } from "../inputs/Order_tagCountOrderByAggregateInput";
import { Order_tagMaxOrderByAggregateInput } from "../inputs/Order_tagMaxOrderByAggregateInput";
import { Order_tagMinOrderByAggregateInput } from "../inputs/Order_tagMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_tagOrderByWithAggregationInput", {})
export class Order_tagOrderByWithAggregationInput {
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
  tag_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Order_tagCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_tagCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_tagMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_tagMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_tagMinOrderByAggregateInput | undefined;
}
