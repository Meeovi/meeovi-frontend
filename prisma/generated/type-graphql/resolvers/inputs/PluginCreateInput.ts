import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateNestedManyWithoutPluginInput } from "../inputs/Custom_entityCreateNestedManyWithoutPluginInput";
import { Payment_methodCreateNestedManyWithoutPluginInput } from "../inputs/Payment_methodCreateNestedManyWithoutPluginInput";
import { Plugin_translationCreateNestedManyWithoutPluginInput } from "../inputs/Plugin_translationCreateNestedManyWithoutPluginInput";

@TypeGraphQL.InputType("PluginCreateInput", {})
export class PluginCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  base_class!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  composer_name?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  managed_by_composer?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  autoload!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  license?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  upgrade_version?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  installed_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  upgraded_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateNestedManyWithoutPluginInput, {
    nullable: true
  })
  custom_entity?: Custom_entityCreateNestedManyWithoutPluginInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateNestedManyWithoutPluginInput, {
    nullable: true
  })
  payment_method?: Payment_methodCreateNestedManyWithoutPluginInput | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateNestedManyWithoutPluginInput, {
    nullable: true
  })
  plugin_translation?: Plugin_translationCreateNestedManyWithoutPluginInput | undefined;
}
