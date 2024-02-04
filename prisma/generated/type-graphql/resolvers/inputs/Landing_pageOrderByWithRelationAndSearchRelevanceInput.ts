import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Cms_pageOrderByWithRelationAndSearchRelevanceInput";
import { Landing_page_sales_channelOrderByRelationAggregateInput } from "../inputs/Landing_page_sales_channelOrderByRelationAggregateInput";
import { Landing_page_tagOrderByRelationAggregateInput } from "../inputs/Landing_page_tagOrderByRelationAggregateInput";
import { Landing_page_translationOrderByRelationAggregateInput } from "../inputs/Landing_page_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_pageOrderByWithRelationAndSearchRelevanceInput", {})
export class Landing_pageOrderByWithRelationAndSearchRelevanceInput {
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
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cms_page_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  cms_page?: Cms_pageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  landing_page_sales_channel?: Landing_page_sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  landing_page_tag?: Landing_page_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationOrderByRelationAggregateInput | undefined;
}
