import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_folder_configurationWhereInput } from "../inputs/Media_folder_configurationWhereInput";

@TypeGraphQL.InputType("Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput", {})
export class Media_folder_configurationUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_folder_configurationUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  update!: Media_folder_configurationUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  create!: Media_folder_configurationCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput;

  @TypeGraphQL.Field(_type => Media_folder_configurationWhereInput, {
    nullable: true
  })
  where?: Media_folder_configurationWhereInput | undefined;
}
