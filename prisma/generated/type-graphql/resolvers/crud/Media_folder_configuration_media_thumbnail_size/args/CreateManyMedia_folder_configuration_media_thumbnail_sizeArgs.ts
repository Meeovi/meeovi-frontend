import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Media_folder_configuration_media_thumbnail_sizeCreateManyInput } from "../../../inputs/Media_folder_configuration_media_thumbnail_sizeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMedia_folder_configuration_media_thumbnail_sizeArgs {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeCreateManyInput], {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
