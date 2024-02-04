import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Custom_field } from "../models/Custom_field";
import { Product_search_config } from "../models/Product_search_config";

@TypeGraphQL.ObjectType("Product_search_config_field", {})
export class Product_search_config_field {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_search_config_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  custom_field_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  field!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  tokenize!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  searchable!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ranking!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  custom_field?: Custom_field | null;

  product_search_config?: Product_search_config;
}
