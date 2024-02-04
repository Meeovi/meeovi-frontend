import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionAvgOrderByAggregateInput } from "../inputs/Cms_sectionAvgOrderByAggregateInput";
import { Cms_sectionCountOrderByAggregateInput } from "../inputs/Cms_sectionCountOrderByAggregateInput";
import { Cms_sectionMaxOrderByAggregateInput } from "../inputs/Cms_sectionMaxOrderByAggregateInput";
import { Cms_sectionMinOrderByAggregateInput } from "../inputs/Cms_sectionMinOrderByAggregateInput";
import { Cms_sectionSumOrderByAggregateInput } from "../inputs/Cms_sectionSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_sectionOrderByWithAggregationInput", {})
export class Cms_sectionOrderByWithAggregationInput {
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
  cms_page_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sizing_mode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mobile_behavior?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  background_color?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  background_media_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  background_media_mode?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  visibility?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  css_class?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Cms_sectionCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_sectionCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Cms_sectionAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_sectionMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_sectionMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Cms_sectionSumOrderByAggregateInput | undefined;
}
