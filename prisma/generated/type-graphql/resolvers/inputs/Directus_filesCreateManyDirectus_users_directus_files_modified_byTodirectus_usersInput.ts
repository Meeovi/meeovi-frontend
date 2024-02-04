import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput", {})
export class Directus_filesCreateManyDirectus_users_directus_files_modified_byTodirectus_usersInput {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  folder?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uploaded_by?: string | undefined;

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
}
