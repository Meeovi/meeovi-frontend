import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateNestedOneWithoutCountry_translationInput } from "../inputs/CountryCreateNestedOneWithoutCountry_translationInput";
import { LanguageCreateNestedOneWithoutCountry_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCountry_translationInput";

@TypeGraphQL.InputType("Country_translationCreateInput", {})
export class Country_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address_format?: string | undefined;

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

  @TypeGraphQL.Field(_type => CountryCreateNestedOneWithoutCountry_translationInput, {
    nullable: false
  })
  country!: CountryCreateNestedOneWithoutCountry_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCountry_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCountry_translationInput;
}
