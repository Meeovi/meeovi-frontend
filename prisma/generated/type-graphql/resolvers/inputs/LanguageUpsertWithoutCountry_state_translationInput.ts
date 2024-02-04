import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutCountry_state_translationInput } from "../inputs/LanguageCreateWithoutCountry_state_translationInput";
import { LanguageUpdateWithoutCountry_state_translationInput } from "../inputs/LanguageUpdateWithoutCountry_state_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutCountry_state_translationInput", {})
export class LanguageUpsertWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutCountry_state_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutCountry_state_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutCountry_state_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutCountry_state_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
