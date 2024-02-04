import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockAvgOrderByAggregateInput } from "../inputs/Cms_blockAvgOrderByAggregateInput";
import { Cms_blockCountOrderByAggregateInput } from "../inputs/Cms_blockCountOrderByAggregateInput";
import { Cms_blockMaxOrderByAggregateInput } from "../inputs/Cms_blockMaxOrderByAggregateInput";
import { Cms_blockMinOrderByAggregateInput } from "../inputs/Cms_blockMinOrderByAggregateInput";
import { Cms_blockSumOrderByAggregateInput } from "../inputs/Cms_blockSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_blockOrderByWithAggregationInput", {})
export class Cms_blockOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cms_section_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_section_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  section_position?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  margin_top?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  margin_bottom?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  margin_left?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  margin_right?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Cms_blockCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_blockCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Cms_blockAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_blockMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_blockMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Cms_blockSumOrderByAggregateInput | undefined;
}
