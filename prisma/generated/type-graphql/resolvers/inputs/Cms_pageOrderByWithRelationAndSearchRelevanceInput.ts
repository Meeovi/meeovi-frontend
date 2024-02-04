import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { Cms_pageOrderByRelevanceInput } from "../inputs/Cms_pageOrderByRelevanceInput";
import { Cms_page_translationOrderByRelationAggregateInput } from "../inputs/Cms_page_translationOrderByRelationAggregateInput";
import { Cms_sectionOrderByRelationAggregateInput } from "../inputs/Cms_sectionOrderByRelationAggregateInput";
import { Landing_pageOrderByRelationAggregateInput } from "../inputs/Landing_pageOrderByRelationAggregateInput";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_pageOrderByWithRelationAndSearchRelevanceInput", {})
export class Cms_pageOrderByWithRelationAndSearchRelevanceInput {
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

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  category?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_section?: Cms_sectionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageOrderByRelationAggregateInput, {
    nullable: true
  })
  landing_page?: Landing_pageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  product?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Cms_pageOrderByRelevanceInput | undefined;
}
