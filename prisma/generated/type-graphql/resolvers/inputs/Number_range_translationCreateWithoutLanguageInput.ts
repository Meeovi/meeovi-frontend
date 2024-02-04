import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateNestedOneWithoutNumber_range_translationInput } from "../inputs/Number_rangeCreateNestedOneWithoutNumber_range_translationInput";

@TypeGraphQL.InputType("Number_range_translationCreateWithoutLanguageInput", {})
export class Number_range_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Number_rangeCreateNestedOneWithoutNumber_range_translationInput, {
    nullable: false
  })
  number_range!: Number_rangeCreateNestedOneWithoutNumber_range_translationInput;
}
