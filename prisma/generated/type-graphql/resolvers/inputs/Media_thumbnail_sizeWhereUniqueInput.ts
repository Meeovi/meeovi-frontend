import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { Media_folder_configuration_media_thumbnail_sizeListRelationFilter } from "../inputs/Media_folder_configuration_media_thumbnail_sizeListRelationFilter";
import { Media_thumbnail_sizeWhereInput } from "../inputs/Media_thumbnail_sizeWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { media_thumbnail_sizeWidthHeightCompoundUniqueInput } from "../inputs/media_thumbnail_sizeWidthHeightCompoundUniqueInput";

@TypeGraphQL.InputType("Media_thumbnail_sizeWhereUniqueInput", {})
export class Media_thumbnail_sizeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => media_thumbnail_sizeWidthHeightCompoundUniqueInput, {
    nullable: true
  })
  width_height?: media_thumbnail_sizeWidthHeightCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  AND?: Media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  OR?: Media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnail_sizeWhereInput], {
    nullable: true
  })
  NOT?: Media_thumbnail_sizeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  width?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  height?: IntFilter | undefined;

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
