import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutPlugin_translationInput } from "../inputs/LanguageCreateNestedOneWithoutPlugin_translationInput";
import { PluginCreateNestedOneWithoutPlugin_translationInput } from "../inputs/PluginCreateNestedOneWithoutPlugin_translationInput";

@TypeGraphQL.InputType("Plugin_translationCreateInput", {})
export class Plugin_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  manufacturer_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  support_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  changelog?: string | undefined;

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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutPlugin_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutPlugin_translationInput;

  @TypeGraphQL.Field(_type => PluginCreateNestedOneWithoutPlugin_translationInput, {
    nullable: false
  })
  plugin!: PluginCreateNestedOneWithoutPlugin_translationInput;
}
