import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Custom_field_set } from "../models/Custom_field_set";
import { Product_search_config_field } from "../models/Product_search_config_field";
import { Custom_fieldCount } from "../resolvers/outputs/Custom_fieldCount";

@TypeGraphQL.ObjectType("Custom_field", {})
export class Custom_field {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  set_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allow_customer_write!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  allow_cart_expose!: number;

  custom_field_set?: Custom_field_set | null;

  product_search_config_field?: Product_search_config_field[];

  @TypeGraphQL.Field(_type => Custom_fieldCount, {
    nullable: true
  })
  _count?: Custom_fieldCount | null;
}
