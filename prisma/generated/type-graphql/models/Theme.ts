import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Theme_child } from "../models/Theme_child";
import { Theme_media } from "../models/Theme_media";
import { Theme_sales_channel } from "../models/Theme_sales_channel";
import { Theme_translation } from "../models/Theme_translation";
import { ThemeCount } from "../resolvers/outputs/ThemeCount";

@TypeGraphQL.ObjectType("Theme", {})
export class Theme {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  author!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  preview_media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_theme_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  base_config?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config_values?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  theme_json?: string | null;

  media?: Media | null;

  theme_child_theme_child_child_idTotheme?: Theme_child[];

  theme_child_theme_child_parent_idTotheme?: Theme_child[];

  theme_media?: Theme_media[];

  theme_sales_channel?: Theme_sales_channel[];

  theme_translation?: Theme_translation[];

  @TypeGraphQL.Field(_type => ThemeCount, {
    nullable: true
  })
  _count?: ThemeCount | null;
}
