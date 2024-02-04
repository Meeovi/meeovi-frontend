import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCountry_state_translationInput } from "../inputs/Country_stateCreateWithoutCountry_state_translationInput";
import { Country_stateUpdateWithoutCountry_state_translationInput } from "../inputs/Country_stateUpdateWithoutCountry_state_translationInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpsertWithoutCountry_state_translationInput", {})
export class Country_stateUpsertWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCountry_state_translationInput, {
    nullable: false
  })
  update!: Country_stateUpdateWithoutCountry_state_translationInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCountry_state_translationInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCountry_state_translationInput;

  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;
}
