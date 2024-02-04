import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeCreateInput";
import { Media_folder_configuration_media_thumbnail_sizeUpdateInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeUpdateInput";
import { Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCreateInput, {
    nullable: false
  })
  create!: Media_folder_configuration_media_thumbnail_sizeCreateInput;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeUpdateInput, {
    nullable: false
  })
  update!: Media_folder_configuration_media_thumbnail_sizeUpdateInput;
}
