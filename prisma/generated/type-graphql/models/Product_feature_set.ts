import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Product } from "../models/Product";
import { Product_feature_set_translation } from "../models/Product_feature_set_translation";
import { Product_feature_setCount } from "../resolvers/outputs/Product_feature_setCount";

@TypeGraphQL.ObjectType("Product_feature_set", {})
export class Product_feature_set {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  features?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  product?: Product[];

  product_feature_set_translation?: Product_feature_set_translation[];

  @TypeGraphQL.Field(_type => Product_feature_setCount, {
    nullable: true
  })
  _count?: Product_feature_setCount | null;
}
