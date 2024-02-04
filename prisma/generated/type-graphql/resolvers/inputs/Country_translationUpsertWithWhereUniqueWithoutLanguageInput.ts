import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateWithoutLanguageInput } from "../inputs/Country_translationCreateWithoutLanguageInput";
import { Country_translationUpdateWithoutLanguageInput } from "../inputs/Country_translationUpdateWithoutLanguageInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Country_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Country_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Country_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Country_translationCreateWithoutLanguageInput;
}
