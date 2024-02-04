import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cms_section } from "../models/Cms_section";
import { Cms_slot } from "../models/Cms_slot";
import { Media } from "../models/Media";
import { Cms_blockCount } from "../resolvers/outputs/Cms_blockCount";

@TypeGraphQL.ObjectType("Cms_block", {})
export class Cms_block {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_section_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_section_version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section_position?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_top?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_bottom?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_left?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_right?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  background_color?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  background_media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  background_media_mode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  css_class?: string | null;

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

  media?: Media | null;

  cms_section?: Cms_section | null;

  cms_slot?: Cms_slot[];

  @TypeGraphQL.Field(_type => Cms_blockCount, {
    nullable: true
  })
  _count?: Cms_blockCount | null;
}
