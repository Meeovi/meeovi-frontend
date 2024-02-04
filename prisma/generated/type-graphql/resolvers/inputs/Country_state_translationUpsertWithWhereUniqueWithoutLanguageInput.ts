import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateWithoutLanguageInput } from "../inputs/Country_state_translationCreateWithoutLanguageInput";
import { Country_state_translationUpdateWithoutLanguageInput } from "../inputs/Country_state_translationUpdateWithoutLanguageInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Country_state_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Country_state_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Country_state_translationCreateWithoutLanguageInput;
}
