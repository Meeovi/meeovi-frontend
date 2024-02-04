import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { Directus_foldersNullableRelationFilter } from "../inputs/Directus_foldersNullableRelationFilter";
import { Directus_usersNullableRelationFilter } from "../inputs/Directus_usersNullableRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_filesWhereInput", {})
export class Directus_filesWhereInput {
  @TypeGraphQL.Field(_type => [Directus_filesWhereInput], {
    nullable: true
  })
  AND?: Directus_filesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereInput], {
    nullable: true
  })
  OR?: Directus_filesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesWhereInput], {
    nullable: true
  })
  NOT?: Directus_filesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  storage?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  filename_disk?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  filename_download?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  folder?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  uploaded_by?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  uploaded_on?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modified_by?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  modified_on?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  charset?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BigIntNullableFilter, {
    nullable: true
  })
  filesize?: BigIntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  width?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  height?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  duration?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  embed?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  location?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  tags?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  metadata?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersNullableRelationFilter, {
    nullable: true
  })
  directus_folders?: Directus_foldersNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_usersNullableRelationFilter, {
    nullable: true
  })
  directus_users_directus_files_modified_byTodirectus_users?: Directus_usersNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_usersNullableRelationFilter, {
    nullable: true
  })
  directus_users_directus_files_uploaded_byTodirectus_users?: Directus_usersNullableRelationFilter | undefined;
}
