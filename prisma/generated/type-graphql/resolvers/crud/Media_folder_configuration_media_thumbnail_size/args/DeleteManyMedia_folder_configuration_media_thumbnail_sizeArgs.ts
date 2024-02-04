import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeWhereInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_folder_configuration_media_thumbnail_sizeWhereInput | undefined;
}
