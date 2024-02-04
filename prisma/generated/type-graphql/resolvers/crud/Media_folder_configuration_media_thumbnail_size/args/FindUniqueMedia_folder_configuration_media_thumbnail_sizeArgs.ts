import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput;
}
