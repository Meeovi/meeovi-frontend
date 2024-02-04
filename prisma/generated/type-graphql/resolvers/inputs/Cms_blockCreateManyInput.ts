import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Cms_blockCreateManyInput", {})
export class Cms_blockCreateManyInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_section_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_section_version_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  section_position?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  locked?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_top?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_bottom?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_left?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  margin_right?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  background_color?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  background_media_id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  background_media_mode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  visibility?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  css_class?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
