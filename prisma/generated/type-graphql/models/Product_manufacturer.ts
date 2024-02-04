import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Media } from "../models/Media";
import { Product } from "../models/Product";
import { Product_manufacturer_translation } from "../models/Product_manufacturer_translation";
import { Product_manufacturerCount } from "../resolvers/outputs/Product_manufacturerCount";

@TypeGraphQL.ObjectType("Product_manufacturer", {})
export class Product_manufacturer {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product?: Product[];

  media?: Media | null;

  product_manufacturer_translation?: Product_manufacturer_translation[];

  @TypeGraphQL.Field(_type => Product_manufacturerCount, {
    nullable: true
  })
  _count?: Product_manufacturerCount | null;
}
