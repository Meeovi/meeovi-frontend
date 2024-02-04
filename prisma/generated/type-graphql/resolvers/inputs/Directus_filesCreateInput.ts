import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_foldersCreateNestedOneWithoutDirectus_filesInput } from "../inputs/Directus_foldersCreateNestedOneWithoutDirectus_filesInput";
import { Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput } from "../inputs/Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput";
import { Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput } from "../inputs/Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput";

@TypeGraphQL.InputType("Directus_filesCreateInput", {})
export class Directus_filesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  storage!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename_disk?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  filename_download!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  uploaded_on?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  modified_on?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  charset?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  filesize?: bigint | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  width?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  embed?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  metadata?: string | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersCreateNestedOneWithoutDirectus_filesInput, {
    nullable: true
  })
  directus_folders?: Directus_foldersCreateNestedOneWithoutDirectus_filesInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput, {
    nullable: true
  })
  directus_users_directus_files_modified_byTodirectus_users?: Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_modified_byTodirectus_usersInput | undefined;

  @TypeGraphQL.Field(_type => Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput, {
    nullable: true
  })
  directus_users_directus_files_uploaded_byTodirectus_users?: Directus_usersCreateNestedOneWithoutDirectus_files_directus_files_uploaded_byTodirectus_usersInput | undefined;
}
