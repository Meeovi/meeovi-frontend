import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media_folder_configuration_media_thumbnail_size } from "../models/Media_folder_configuration_media_thumbnail_size";
import { Media_folder_configurationCount } from "../resolvers/outputs/Media_folder_configurationCount";

@TypeGraphQL.ObjectType("Media_folder_configuration", {})
export class Media_folder_configuration {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  create_thumbnails?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  thumbnail_quality?: number | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_thumbnail_sizes_ro?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  keep_aspect_ratio?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  private?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  no_association?: boolean | null;

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

  media_folder_configuration_media_thumbnail_size?: Media_folder_configuration_media_thumbnail_size[];

  @TypeGraphQL.Field(_type => Media_folder_configurationCount, {
    nullable: true
  })
  _count?: Media_folder_configurationCount | null;
}
