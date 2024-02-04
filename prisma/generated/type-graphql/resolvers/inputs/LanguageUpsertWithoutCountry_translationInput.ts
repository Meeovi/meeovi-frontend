import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCountry_translationInput } from "../inputs/LanguageCreateWithoutCountry_translationInput";
import { LanguageUpdateWithoutCountry_translationInput } from "../inputs/LanguageUpdateWithoutCountry_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCountry_translationInput", {})
export class LanguageUpsertWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCountry_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCountry_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCountry_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
