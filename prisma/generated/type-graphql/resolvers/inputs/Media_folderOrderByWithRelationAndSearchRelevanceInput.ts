import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaOrderByRelationAggregateInput } from "../inputs/MediaOrderByRelationAggregateInput";
import { Media_default_folderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Media_default_folderOrderByWithRelationAndSearchRelevanceInput";
import { Media_folderOrderByRelationAggregateInput } from "../inputs/Media_folderOrderByRelationAggregateInput";
import { Media_folderOrderByRelevanceInput } from "../inputs/Media_folderOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folderOrderByWithRelationAndSearchRelevanceInput", {})
export class Media_folderOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  default_folder_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  child_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  path?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_folder_configuration_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  use_parent_configuration?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => MediaOrderByRelationAggregateInput, {
    nullable: true
  })
  media?: MediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media_default_folder?: Media_default_folderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media_folder?: Media_folderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderOrderByRelationAggregateInput, {
    nullable: true
  })
  other_media_folder?: Media_folderOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folderOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Media_folderOrderByRelevanceInput | undefined;
}
