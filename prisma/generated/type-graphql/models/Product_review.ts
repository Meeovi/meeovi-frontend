import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Language } from "../models/Language";
import { Product } from "../models/Product";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Product_review", {})
export class Product_review {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  customer_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  language_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_user?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  content?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  points?: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  status?: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  comment?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  product_version_id!: Buffer;

  customer?: Customer | null;

  language?: Language | null;

  product?: Product;

  sales_channel?: Sales_channel | null;
}
