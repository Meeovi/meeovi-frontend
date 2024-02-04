import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput";
import { Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput", {})
export class Media_folder_configuration_media_thumbnail_sizeUpdateWithWhereUniqueWithoutMedia_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput, {
    nullable: false
  })
  where!: Media_folder_configuration_media_thumbnail_sizeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput, {
    nullable: false
  })
  data!: Media_folder_configuration_media_thumbnail_sizeUpdateWithoutMedia_thumbnail_sizeInput;
}
