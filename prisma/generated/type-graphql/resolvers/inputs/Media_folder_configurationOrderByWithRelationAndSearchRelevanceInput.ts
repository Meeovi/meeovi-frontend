import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationOrderByRelevanceInput } from "../inputs/Media_folder_configurationOrderByRelevanceInput";
import { Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput", {})
export class Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  create_thumbnails?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  thumbnail_quality?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_thumbnail_sizes_ro?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  keep_aspect_ratio?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  private?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  no_association?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput, {
    nullable: true
  })
  media_folder_configuration_media_thumbnail_size?: Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Media_folder_configurationOrderByRelevanceInput | undefined;
}
