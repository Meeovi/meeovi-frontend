import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { Product_cross_selling } from "../models/Product_cross_selling";
import { Product_export } from "../models/Product_export";
import { Product_stream_filter } from "../models/Product_stream_filter";
import { Product_stream_mapping } from "../models/Product_stream_mapping";
import { Product_stream_translation } from "../models/Product_stream_translation";
import { Swag_paypal_pos_sales_channel } from "../models/Swag_paypal_pos_sales_channel";
import { Product_streamCount } from "../resolvers/outputs/Product_streamCount";

@TypeGraphQL.ObjectType("Product_stream", {})
export class Product_stream {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  api_filter?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  invalid!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  category?: Category[];

  product_cross_selling?: Product_cross_selling[];

  product_export?: Product_export[];

  product_stream_filter?: Product_stream_filter[];

  product_stream_mapping?: Product_stream_mapping[];

  product_stream_translation?: Product_stream_translation[];

  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channel[];

  @TypeGraphQL.Field(_type => Product_streamCount, {
    nullable: true
  })
  _count?: Product_streamCount | null;
}
