import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Custom_entity } from "../models/Custom_entity";
import { Payment_method } from "../models/Payment_method";
import { Plugin_translation } from "../models/Plugin_translation";
import { PluginCount } from "../resolvers/outputs/PluginCount";

@TypeGraphQL.ObjectType("Plugin", {})
export class Plugin {
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
  composer_name?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  managed_by_composer!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  autoload!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  author?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyright?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  license?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  version!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  upgrade_version?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  icon?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  installed_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  upgraded_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  custom_entity?: Custom_entity[];

  payment_method?: Payment_method[];

  plugin_translation?: Plugin_translation[];

  @TypeGraphQL.Field(_type => PluginCount, {
    nullable: true
  })
  _count?: PluginCount | null;
}
