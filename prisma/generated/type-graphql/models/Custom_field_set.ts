import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { App } from "../models/App";
import { Custom_field } from "../models/Custom_field";
import { Custom_field_set_relation } from "../models/Custom_field_set_relation";
import { Product_custom_field_set } from "../models/Product_custom_field_set";
import { Custom_field_setCount } from "../resolvers/outputs/Custom_field_setCount";

@TypeGraphQL.ObjectType("Custom_field_set", {})
export class Custom_field_set {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

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
  app_id?: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  position!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  global!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  custom_field?: Custom_field[];

  app?: App | null;

  custom_field_set_relation?: Custom_field_set_relation[];

  product_custom_field_set?: Product_custom_field_set[];

  @TypeGraphQL.Field(_type => Custom_field_setCount, {
    nullable: true
  })
  _count?: Custom_field_setCount | null;
}
