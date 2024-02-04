import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { MediaListRelationFilter } from "../inputs/MediaListRelationFilter";
import { Media_default_folderNullableRelationFilter } from "../inputs/Media_default_folderNullableRelationFilter";
import { Media_folderListRelationFilter } from "../inputs/Media_folderListRelationFilter";
import { Media_folderNullableRelationFilter } from "../inputs/Media_folderNullableRelationFilter";
import { Media_folderWhereInput } from "../inputs/Media_folderWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Media_folderWhereUniqueInput", {})
export class Media_folderWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  default_folder_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereInput], {
    nullable: true
  })
  AND?: Media_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereInput], {
    nullable: true
  })
  OR?: Media_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_folderWhereInput], {
    nullable: true
  })
  NOT?: Media_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  parent_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  child_count?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  path?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  media_folder_configuration_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  use_parent_configuration?: BoolNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => MediaListRelationFilter, {
    nullable: true
  })
  media?: MediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_default_folderNullableRelationFilter, {
    nullable: true
  })
  media_default_folder?: Media_default_folderNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folderNullableRelationFilter, {
    nullable: true
  })
  media_folder?: Media_folderNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folderListRelationFilter, {
    nullable: true
  })
  other_media_folder?: Media_folderListRelationFilter | undefined;
}
