import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cms_block } from "../models/Cms_block";
import { Cms_page } from "../models/Cms_page";
import { Media } from "../models/Media";
import { Cms_sectionCount } from "../resolvers/outputs/Cms_sectionCount";

@TypeGraphQL.ObjectType("Cms_section", {})
export class Cms_section {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_page_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_page_version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

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
    nullable: false
  })
  sizing_mode!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mobile_behavior!: string;

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

  cms_block?: Cms_block[];

  media?: Media | null;

  cms_page?: Cms_page;

  @TypeGraphQL.Field(_type => Cms_sectionCount, {
    nullable: true
  })
  _count?: Cms_sectionCount | null;
}
