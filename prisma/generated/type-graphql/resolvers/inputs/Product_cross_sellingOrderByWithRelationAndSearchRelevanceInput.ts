import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { Product_cross_sellingOrderByRelevanceInput } from "../inputs/Product_cross_sellingOrderByRelevanceInput";
import { Product_cross_selling_assigned_productsOrderByRelationAggregateInput } from "../inputs/Product_cross_selling_assigned_productsOrderByRelationAggregateInput";
import { Product_cross_selling_translationOrderByRelationAggregateInput } from "../inputs/Product_cross_selling_translationOrderByRelationAggregateInput";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_cross_sellingOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sort_by?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sort_direction?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  active?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  limit?: "asc" | "desc" | undefined;

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
  product_stream_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product?: ProductOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream?: Product_streamOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling_assigned_products?: Product_cross_selling_assigned_productsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling_translation?: Product_cross_selling_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_cross_sellingOrderByRelevanceInput | undefined;
}
