import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationUpdateWithoutCountry_stateInput } from "../inputs/Country_state_translationUpdateWithoutCountry_stateInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput", {})
export class Country_state_translationUpdateWithWhereUniqueWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => Country_state_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Country_state_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_state_translationUpdateWithoutCountry_stateInput, {
    nullable: false
  })
  data!: Country_state_translationUpdateWithoutCountry_stateInput;
}
