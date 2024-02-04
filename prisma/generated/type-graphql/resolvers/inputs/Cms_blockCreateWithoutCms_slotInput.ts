import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateNestedOneWithoutCms_blockInput } from "../inputs/Cms_sectionCreateNestedOneWithoutCms_blockInput";
import { MediaCreateNestedOneWithoutCms_blockInput } from "../inputs/MediaCreateNestedOneWithoutCms_blockInput";

@TypeGraphQL.InputType("Cms_blockCreateWithoutCms_slotInput", {})
export class Cms_blockCreateWithoutCms_slotInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  version_id?: Buffer | undefined;

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

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutCms_blockInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutCms_blockInput | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateNestedOneWithoutCms_blockInput, {
    nullable: true
  })
  cms_section?: Cms_sectionCreateNestedOneWithoutCms_blockInput | undefined;
}
