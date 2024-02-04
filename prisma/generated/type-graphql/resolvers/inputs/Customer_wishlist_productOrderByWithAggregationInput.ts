import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCountOrderByAggregateInput } from "../inputs/Customer_wishlist_productCountOrderByAggregateInput";
import { Customer_wishlist_productMaxOrderByAggregateInput } from "../inputs/Customer_wishlist_productMaxOrderByAggregateInput";
import { Customer_wishlist_productMinOrderByAggregateInput } from "../inputs/Customer_wishlist_productMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlist_productOrderByWithAggregationInput", {})
export class Customer_wishlist_productOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_wishlist_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Customer_wishlist_productCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Customer_wishlist_productCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Customer_wishlist_productMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Customer_wishlist_productMinOrderByAggregateInput | undefined;
}
