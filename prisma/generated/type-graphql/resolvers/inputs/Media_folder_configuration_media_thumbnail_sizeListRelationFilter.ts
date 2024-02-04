import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_folder_configuration_media_thumbnail_sizeWhereInput } from "../inputs/Media_folder_configuration_media_thumbnail_sizeWhereInput";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeListRelationFilter", {})
export class Media_folder_configuration_media_thumbnail_sizeListRelationFilter {
  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  every?: Media_folder_configuration_media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  some?: Media_folder_configuration_media_thumbnail_sizeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeWhereInput, {
    nullable: true
  })
  none?: Media_folder_configuration_media_thumbnail_sizeWhereInput | undefined;
}
