import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput";
import { Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput", {})
export class Media_folder_configuration_media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_folder_configuration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  media_thumbnail_size_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media_folder_configuration?: Media_folder_configurationOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media_thumbnail_size?: Media_thumbnail_sizeOrderByWithRelationAndSearchRelevanceInput | undefined;
}
