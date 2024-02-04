import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_folders } from "../models/Directus_folders";
import { Directus_users } from "../models/Directus_users";

@TypeGraphQL.ObjectType("Directus_files", {})
export class Directus_files {
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
  filename_disk?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  filename_download!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  folder?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  uploaded_by?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  uploaded_on!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modified_by?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  modified_on!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  charset?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
    nullable: true
  })
  filesize?: bigint | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  width?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  height?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  embed?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  tags?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  metadata?: string | null;

  directus_folders?: Directus_folders | null;

  directus_users_directus_files_modified_byTodirectus_users?: Directus_users | null;

  directus_users_directus_files_uploaded_byTodirectus_users?: Directus_users | null;
}
