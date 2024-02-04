import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Product_search_config_field } from "../models/Product_search_config_field";
import { Product_search_configCount } from "../resolvers/outputs/Product_search_configCount";

@TypeGraphQL.ObjectType("Product_search_config", {})
export class Product_search_config {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  and_logic!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  min_search_length!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  excluded_terms?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  language?: Language;

  product_search_config_field?: Product_search_config_field[];

  @TypeGraphQL.Field(_type => Product_search_configCount, {
    nullable: true
  })
  _count?: Product_search_configCount | null;
}
