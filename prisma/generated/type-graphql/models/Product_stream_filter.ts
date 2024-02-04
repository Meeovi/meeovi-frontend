import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product_stream } from "../models/Product_stream";
import { Product_stream_filterCount } from "../resolvers/outputs/Product_stream_filterCount";

@TypeGraphQL.ObjectType("Product_stream_filter", {})
export class Product_stream_filter {
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
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  field?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  operator?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parameters?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

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

  product_stream_filter?: Product_stream_filter | null;

  other_product_stream_filter?: Product_stream_filter[];

  product_stream?: Product_stream;

  @TypeGraphQL.Field(_type => Product_stream_filterCount, {
    nullable: true
  })
  _count?: Product_stream_filterCount | null;
}
