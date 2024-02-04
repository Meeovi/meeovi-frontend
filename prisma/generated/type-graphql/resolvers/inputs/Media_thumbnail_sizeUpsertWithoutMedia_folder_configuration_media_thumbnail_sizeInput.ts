import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_thumbnail_sizeUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput } from "../inputs/Media_thumbnail_sizeUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput";
import { Media_thumbnail_sizeWhereInput } from "../inputs/Media_thumbnail_sizeWhereInput";

@TypeGraphQL.InputType("Media_thumbnail_sizeUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput", {})
export class Media_thumbnail_sizeUpsertWithoutMedia_folder_configuration_media_thumbnail_sizeInput {
  @TypeGraphQL.Field(_type => Media_thumbnail_sizeUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  update!: Media_thumbnail_sizeUpdateWithoutMedia_folder_configuration_media_thumbnail_sizeInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput, {
    nullable: false
  })
  create!: Media_thumbnail_sizeCreateWithoutMedia_folder_configuration_media_thumbnail_sizeInput;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  where?: Media_thumbnail_sizeWhereInput | undefined;
}
