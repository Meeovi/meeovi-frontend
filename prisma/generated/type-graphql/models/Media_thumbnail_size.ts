import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media_folder_configuration_media_thumbnail_size } from "../models/Media_folder_configuration_media_thumbnail_size";
import { Media_thumbnail_sizeCount } from "../resolvers/outputs/Media_thumbnail_sizeCount";

@TypeGraphQL.ObjectType("Media_thumbnail_size", {})
export class Media_thumbnail_size {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  width!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  height!: number;

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

  @TypeGraphQL.Field(_type => Media_thumbnail_sizeCount, {
    nullable: true
  })
  _count?: Media_thumbnail_sizeCount | null;
}
