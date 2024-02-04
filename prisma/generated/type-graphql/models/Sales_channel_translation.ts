import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Sales_channel_translation", {})
export class Sales_channel_translation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  home_keywords?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  home_meta_description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  home_meta_title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  home_name?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  home_enabled!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  home_slot_config?: string | null;

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

  sales_channel?: Sales_channel;
}
