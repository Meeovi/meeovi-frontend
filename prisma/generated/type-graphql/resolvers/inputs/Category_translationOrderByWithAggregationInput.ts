import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationAvgOrderByAggregateInput } from "../inputs/Category_translationAvgOrderByAggregateInput";
import { Category_translationCountOrderByAggregateInput } from "../inputs/Category_translationCountOrderByAggregateInput";
import { Category_translationMaxOrderByAggregateInput } from "../inputs/Category_translationMaxOrderByAggregateInput";
import { Category_translationMinOrderByAggregateInput } from "../inputs/Category_translationMinOrderByAggregateInput";
import { Category_translationSumOrderByAggregateInput } from "../inputs/Category_translationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Category_translationOrderByWithAggregationInput", {})
export class Category_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  category_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  breadcrumb?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  internal_link?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  link_new_tab?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  link_type?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  external_link?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  keywords?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  slot_config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Category_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Category_translationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Category_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Category_translationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Category_translationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Category_translationSumOrderByAggregateInput | undefined;
}
