import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput } from "../inputs/Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput";

@TypeGraphQL.InputType("Number_range_type_translationCreateWithoutLanguageInput", {})
export class Number_range_type_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  type_name?: string | undefined;

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

  @TypeGraphQL.Field(_type => Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput, {
    nullable: false
  })
  number_range_type!: Number_range_typeCreateNestedOneWithoutNumber_range_type_translationInput;
}
