import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Number_range_sales_channel } from "../models/Number_range_sales_channel";
import { Number_range_type_translation } from "../models/Number_range_type_translation";
import { Number_range_typeCount } from "../resolvers/outputs/Number_range_typeCount";

@TypeGraphQL.ObjectType("Number_range_type", {})
export class Number_range_type {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | null;

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

  number_range_sales_channel?: Number_range_sales_channel[];

  number_range_type_translation?: Number_range_type_translation[];

  @TypeGraphQL.Field(_type => Number_range_typeCount, {
    nullable: true
  })
  _count?: Number_range_typeCount | null;
}
