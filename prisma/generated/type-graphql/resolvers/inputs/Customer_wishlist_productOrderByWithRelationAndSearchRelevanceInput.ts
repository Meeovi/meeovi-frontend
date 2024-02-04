import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Customer_wishlistOrderByWithRelationAndSearchRelevanceInput";
import { Customer_wishlist_productOrderByRelevanceInput } from "../inputs/Customer_wishlist_productOrderByRelevanceInput";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput", {})
export class Customer_wishlist_productOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => Customer_wishlistOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlist_productOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Customer_wishlist_productOrderByRelevanceInput | undefined;
}
