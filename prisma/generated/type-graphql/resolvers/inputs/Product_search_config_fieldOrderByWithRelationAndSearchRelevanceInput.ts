import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Custom_fieldOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_configOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_search_configOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_config_fieldOrderByRelevanceInput } from "../inputs/Product_search_config_fieldOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_search_config_fieldOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_search_config_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_field_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  field?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tokenize?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  searchable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ranking?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  custom_field?: Custom_fieldOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_configOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_search_config?: Product_search_configOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_search_config_fieldOrderByRelevanceInput | undefined;
}
