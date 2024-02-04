import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCountOrderByAggregateInput } from "../inputs/Customer_wishlistCountOrderByAggregateInput";
import { Customer_wishlistMaxOrderByAggregateInput } from "../inputs/Customer_wishlistMaxOrderByAggregateInput";
import { Customer_wishlistMinOrderByAggregateInput } from "../inputs/Customer_wishlistMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlistOrderByWithAggregationInput", {})
export class Customer_wishlistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Customer_wishlistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_wishlistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_wishlistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_wishlistMinOrderByAggregateInput | undefined;
}
