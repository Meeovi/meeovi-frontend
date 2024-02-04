import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { Media_folder_configuration_media_thumbnail_sizeListRelationFilter } from "../inputs/Media_folder_configuration_media_thumbnail_sizeListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Media_folder_configurationWhereInput", {})
export class Media_folder_configurationWhereInput {
  @TypeGraphQL.Field(_type => [Media_folder_configurationWhereInput], {
    nullable: true
  })
  AND?: Media_folder_configurationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationWhereInput], {
    nullable: true
  })
  OR?: Media_folder_configurationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folder_configurationWhereInput], {
    nullable: true
  })
  NOT?: Media_folder_configurationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  create_thumbnails?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  thumbnail_quality?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_thumbnail_sizes_ro?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  keep_aspect_ratio?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  private?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  no_association?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folder_configuration_media_thumbnail_sizeListRelationFilter, {
    nullable: true
  })
  media_folder_configuration_media_thumbnail_size?: Media_folder_configuration_media_thumbnail_sizeListRelationFilter | undefined;
}
