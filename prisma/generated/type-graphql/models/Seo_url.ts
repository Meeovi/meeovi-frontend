import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Seo_url", {})
export class Seo_url {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  foreign_key!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  route_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  path_info!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  seo_path_info!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  is_canonical?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_modified!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_deleted!: boolean;

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

  language?: Language;

  sales_channel?: Sales_channel | null;
}
