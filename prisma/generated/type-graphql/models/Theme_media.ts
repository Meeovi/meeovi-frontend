import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Theme } from "../models/Theme";

@TypeGraphQL.ObjectType("Theme_media", {})
export class Theme_media {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  theme_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  media_id!: Buffer;

  media?: Media;

  theme?: Theme;
}
