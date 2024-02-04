import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateNestedManyWithoutCms_sectionInput } from "../inputs/Cms_blockCreateNestedManyWithoutCms_sectionInput";
import { Cms_pageCreateNestedOneWithoutCms_sectionInput } from "../inputs/Cms_pageCreateNestedOneWithoutCms_sectionInput";

@TypeGraphQL.InputType("Cms_sectionCreateWithoutMediaInput", {})
export class Cms_sectionCreateWithoutMediaInput {
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
  type?: string | undefined;

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
  sizing_mode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  mobile_behavior?: string | undefined;

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

  @TypeGraphQL.Field(_type => Cms_blockCreateNestedManyWithoutCms_sectionInput, {
    nullable: true
  })
  cms_block?: Cms_blockCreateNestedManyWithoutCms_sectionInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateNestedOneWithoutCms_sectionInput, {
    nullable: false
  })
  cms_page!: Cms_pageCreateNestedOneWithoutCms_sectionInput;
}
