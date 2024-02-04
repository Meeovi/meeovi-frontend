import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Media_default_folder } from "../models/Media_default_folder";
import { Media_folderCount } from "../resolvers/outputs/Media_folderCount";

@TypeGraphQL.ObjectType("Media_folder", {})
export class Media_folder {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  default_folder_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  child_count!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_folder_configuration_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  use_parent_configuration?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  media?: Media[];

  media_default_folder?: Media_default_folder | null;

  media_folder?: Media_folder | null;

  other_media_folder?: Media_folder[];

  @TypeGraphQL.Field(_type => Media_folderCount, {
    nullable: true
  })
  _count?: Media_folderCount | null;
}
