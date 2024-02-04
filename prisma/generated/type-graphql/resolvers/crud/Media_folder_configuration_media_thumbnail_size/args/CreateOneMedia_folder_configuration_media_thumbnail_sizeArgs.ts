import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeCreateInput, {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeCreateInput;
}
