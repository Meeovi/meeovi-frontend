import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCountry_state_translationInput } from "../inputs/Country_stateCreateWithoutCountry_state_translationInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateOrConnectWithoutCountry_state_translationInput", {})
export class Country_stateCreateOrConnectWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCountry_state_translationInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCountry_state_translationInput;
}
