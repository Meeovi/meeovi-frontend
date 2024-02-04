import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Number_range_sales_channel } from "../models/Number_range_sales_channel";
import { Number_range_translation } from "../models/Number_range_translation";
import { Number_rangeCount } from "../resolvers/outputs/Number_rangeCount";

@TypeGraphQL.ObjectType("Number_range", {})
export class Number_range {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  type_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  global!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  pattern!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  start!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  number_range_sales_channel?: Number_range_sales_channel[];

  number_range_translation?: Number_range_translation[];

  @TypeGraphQL.Field(_type => Number_rangeCount, {
    nullable: true
  })
  _count?: Number_rangeCount | null;
}
