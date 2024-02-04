import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutCountry_state_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCountry_state_translationInput";

@TypeGraphQL.InputType("Country_state_translationCreateWithoutCountry_stateInput", {})
export class Country_state_translationCreateWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCountry_state_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCountry_state_translationInput;
}
