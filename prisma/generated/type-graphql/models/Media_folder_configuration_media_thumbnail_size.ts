import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media_folder_configuration } from "../models/Media_folder_configuration";
import { Media_thumbnail_size } from "../models/Media_thumbnail_size";

@TypeGraphQL.ObjectType("Media_folder_configuration_media_thumbnail_size", {})
export class Media_folder_configuration_media_thumbnail_size {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  media_folder_configuration_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  media_thumbnail_size_id!: Buffer;

  media_folder_configuration?: Media_folder_configuration;

  media_thumbnail_size?: Media_thumbnail_size;
}
