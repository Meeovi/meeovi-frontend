import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Document_base_config_sales_channel } from "../models/Document_base_config_sales_channel";
import { Document_type } from "../models/Document_type";
import { Media } from "../models/Media";
import { Document_base_configCount } from "../resolvers/outputs/Document_base_configCount";

@TypeGraphQL.ObjectType("Document_base_config", {})
export class Document_base_config {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename_prefix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename_suffix?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document_number?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  global?: boolean | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  document_type_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  logo_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

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

  media?: Media | null;

  document_type?: Document_type;

  document_base_config_sales_channel?: Document_base_config_sales_channel[];

  @TypeGraphQL.Field(_type => Document_base_configCount, {
    nullable: true
  })
  _count?: Document_base_configCount | null;
}
