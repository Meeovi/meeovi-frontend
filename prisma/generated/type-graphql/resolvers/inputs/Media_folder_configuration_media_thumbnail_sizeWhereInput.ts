import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Media_folder_configurationRelationFilter } from "../inputs/Media_folder_configurationRelationFilter";
import { Media_thumbnail_sizeRelationFilter } from "../inputs/Media_thumbnail_sizeRelationFilter";

@TypeGraphQL.InputType("Media_folder_configuration_media_thumbnail_sizeWhereInput", {})
export class Media_folder_configuration_media_thumbnail_sizeWhereInput {
  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  AND?: Media_folder_configuration_media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  OR?: Media_folder_configuration_media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configuration_media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  NOT?: Media_folder_configuration_media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_folder_configuration_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_thumbnail_size_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configurationRelationFilter, {
    nullable: true
  })
  media_folder_configuration?: Media_folder_configurationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeRelationFilter, {
    nullable: true
  })
  media_thumbnail_size?: Media_thumbnail_sizeRelationFilter | undefined;
}
