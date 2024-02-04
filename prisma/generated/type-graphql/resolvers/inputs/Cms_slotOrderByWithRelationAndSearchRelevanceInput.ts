import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Cms_blockOrderByWithRelationAndSearchRelevanceInput";
import { Cms_slotOrderByRelevanceInput } from "../inputs/Cms_slotOrderByRelevanceInput";
import { Cms_slot_translationOrderByRelationAggregateInput } from "../inputs/Cms_slot_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_slotOrderByWithRelationAndSearchRelevanceInput", {})
export class Cms_slotOrderByWithRelationAndSearchRelevanceInput {
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
  cms_block_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_block_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Cms_blockOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  cms_block?: Cms_blockOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Cms_slotOrderByRelevanceInput | undefined;
}
