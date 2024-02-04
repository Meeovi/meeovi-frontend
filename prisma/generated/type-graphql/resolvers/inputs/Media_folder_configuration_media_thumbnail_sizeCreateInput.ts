import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_folder_configurationCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeCreateInput", {})
export class Media_folder_configuration_media_thumbnail_sizeCreateInput {
  @TypeGraphQL.Field(_type => Media_folder_configurationCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  media_folder_configuration!: Media_folder_configurationCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  media_thumbnail_size!: Media_thumbnail_sizeCreateNestedOneWithoutMedia_folder_configuration_media_thumbnail_sizeInput;
}
