import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationUpdateWithoutLanguageInput } from "../inputs/Country_state_translationUpdateWithoutLanguageInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Country_state_translationUpdateWithoutLanguageInput;
}
