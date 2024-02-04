import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput";

@TypeGraphQL.InputType("Number_rangeCreateWithoutNumber_range_translationInput", {})
export class Number_rangeCreateWithoutNumber_range_translationInput {
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
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput, {
    nullable: true
  })
  number_range_sales_channel?: Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput | undefined;
}
