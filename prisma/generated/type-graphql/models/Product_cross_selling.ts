import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Product_cross_selling_assigned_products } from "../models/Product_cross_selling_assigned_products";
import { Product_cross_selling_translation } from "../models/Product_cross_selling_translation";
import { Product_stream } from "../models/Product_stream";
import { Product_cross_sellingCount } from "../resolvers/outputs/Product_cross_sellingCount";

@TypeGraphQL.ObjectType("Product_cross_selling", {})
export class Product_cross_selling {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sort_by!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sort_direction!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  active?: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  limit!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_stream_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product?: Product;

  product_stream?: Product_stream | null;

  product_cross_selling_assigned_products?: Product_cross_selling_assigned_products[];

  product_cross_selling_translation?: Product_cross_selling_translation[];

  @TypeGraphQL.Field(_type => Product_cross_sellingCount, {
    nullable: true
  })
  _count?: Product_cross_sellingCount | null;
}
