import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput } from "../inputs/Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput", {})
export class Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput, {
    nullable: true
  })
  media_folder_configuration?: Media_folder_configurationUpdateOneRequiredWithoutMedia_folder_configuration_media_thumbnail_sizeNestedInput | undefined;
}
