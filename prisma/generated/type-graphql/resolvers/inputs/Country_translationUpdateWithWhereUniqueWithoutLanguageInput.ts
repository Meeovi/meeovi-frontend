import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationUpdateWithoutLanguageInput } from "../inputs/Country_translationUpdateWithoutLanguageInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Country_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Country_translationUpdateWithoutLanguageInput;
}
