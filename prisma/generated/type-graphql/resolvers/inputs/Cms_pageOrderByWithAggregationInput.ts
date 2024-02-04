import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCountOrderByAggregateInput } from "../inputs/Cms_pageCountOrderByAggregateInput";
import { Cms_pageMaxOrderByAggregateInput } from "../inputs/Cms_pageMaxOrderByAggregateInput";
import { Cms_pageMinOrderByAggregateInput } from "../inputs/Cms_pageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_pageOrderByWithAggregationInput", {})
export class Cms_pageOrderByWithAggregationInput {
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
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  entity?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  preview_media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  css_class?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_pageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_pageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_pageMinOrderByAggregateInput | undefined;
}
