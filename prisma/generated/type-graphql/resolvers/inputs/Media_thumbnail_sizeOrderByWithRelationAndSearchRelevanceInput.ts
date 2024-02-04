import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeOrderByRelationAggregateInput";
import { Media_thumbnail_sizeOrderByRelevanceInput } from "../inputs/Media_thumbnail_sizeOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput", {})
export class Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  width?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  height?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Media_thumbnail_sizeOrderByRelevanceInput | undefined;
}
