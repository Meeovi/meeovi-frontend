import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product_stream } from "../models/Product_stream";
import { Sales_channel } from "../models/Sales_channel";
import { Sales_channel_domain } from "../models/Sales_channel_domain";

@TypeGraphQL.ObjectType("Product_export", {})
export class Product_export {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_stream_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  storefront_sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_domain_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  access_key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  encoding!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_format!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  include_variants?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  generate_by_cronjob!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  generated_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  interval!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_template?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  body_template?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_template?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  currency_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  paused_schedule?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  is_running!: boolean;

  product_stream?: Product_stream;

  sales_channel_domain?: Sales_channel_domain | null;

  sales_channel_product_export_sales_channel_idTosales_channel?: Sales_channel;

  sales_channel_product_export_storefront_sales_channel_idTosales_channel?: Sales_channel | null;
}
