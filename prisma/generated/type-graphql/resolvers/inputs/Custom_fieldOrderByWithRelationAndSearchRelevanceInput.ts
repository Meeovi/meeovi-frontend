import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_fieldOrderByRelevanceInput } from "../inputs/Custom_fieldOrderByRelevanceInput";
import { Custom_field_setOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Custom_field_setOrderByWithRelationAndSearchRelevanceInput";
import { Product_search_config_fieldOrderByRelationAggregateInput } from "../inputs/Product_search_config_fieldOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_fieldOrderByWithRelationAndSearchRelevanceInput", {})
export class Custom_fieldOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  set_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_customer_write?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_cart_expose?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_config_fieldOrderByRelationAggregateInput, {
    nullable: true
  })
  product_search_config_field?: Product_search_config_fieldOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Custom_fieldOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Custom_fieldOrderByRelevanceInput | undefined;
}
