import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateNestedOneWithoutLocale_translationInput } from "../inputs/LocaleCreateNestedOneWithoutLocale_translationInput";

@TypeGraphQL.InputType("Locale_translationCreateWithoutLanguageInput", {})
export class Locale_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  territory?: string | undefined;

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

  @TypeGraphQL.Field(_type => LocaleCreateNestedOneWithoutLocale_translationInput, {
    nullable: false
  })
  locale!: LocaleCreateNestedOneWithoutLocale_translationInput;
}
