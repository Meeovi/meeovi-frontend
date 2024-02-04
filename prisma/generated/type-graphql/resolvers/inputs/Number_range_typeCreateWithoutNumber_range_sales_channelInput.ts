import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateNestedManyWithoutNumber_range_typeInput } from "../inputs/Number_range_type_translationCreateNestedManyWithoutNumber_range_typeInput";

@TypeGraphQL.InputType("Number_range_typeCreateWithoutNumber_range_sales_channelInput", {})
export class Number_range_typeCreateWithoutNumber_range_sales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | undefined;

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
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateNestedManyWithoutNumber_range_typeInput, {
    nullable: true
  })
  number_range_type_translation?: Number_range_type_translationCreateNestedManyWithoutNumber_range_typeInput | undefined;
}
