import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_line_item_downloadAvgOrderByAggregateInput } from "../inputs/Order_line_item_downloadAvgOrderByAggregateInput";
import { Order_line_item_downloadCountOrderByAggregateInput } from "../inputs/Order_line_item_downloadCountOrderByAggregateInput";
import { Order_line_item_downloadMaxOrderByAggregateInput } from "../inputs/Order_line_item_downloadMaxOrderByAggregateInput";
import { Order_line_item_downloadMinOrderByAggregateInput } from "../inputs/Order_line_item_downloadMinOrderByAggregateInput";
import { Order_line_item_downloadSumOrderByAggregateInput } from "../inputs/Order_line_item_downloadSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_line_item_downloadOrderByWithAggregationInput", {})
export class Order_line_item_downloadOrderByWithAggregationInput {
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
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  access_granted?: "asc" | "desc" | undefined;

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
  media_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Order_line_item_downloadCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Order_line_item_downloadCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Order_line_item_downloadAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Order_line_item_downloadMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Order_line_item_downloadMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_line_item_downloadSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Order_line_item_downloadSumOrderByAggregateInput | undefined;
}
