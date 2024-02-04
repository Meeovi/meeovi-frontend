import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { Category } from "../models/Category";
import { Plugin } from "../models/Plugin";
import { Custom_entityCount } from "../resolvers/outputs/Custom_entityCount";

@TypeGraphQL.ObjectType("Custom_entity", {})
export class Custom_entity {
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
  fields!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  app_id?: Buffer | null;

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
  flags?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  plugin_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  custom_fields_aware?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label_property?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deleted_at?: Date | null;

  category?: Category[];

  app?: App | null;

  plugin?: Plugin | null;

  @TypeGraphQL.Field(_type => Custom_entityCount, {
    nullable: true
  })
  _count?: Custom_entityCount | null;
}
