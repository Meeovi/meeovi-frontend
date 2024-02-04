import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateUpdateWithoutCountry_state_translationInput } from "../inputs/Country_stateUpdateWithoutCountry_state_translationInput";
import { Country_stateWhereInput } from "../inputs/Country_stateWhereInput";

@TypeGraphQL.InputType("Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput", {})
export class Country_stateUpdateToOneWithWhereWithoutCountry_state_translationInput {
  @TypeGraphQL.Field(_type => Country_stateWhereInput, {
    nullable: true
  })
  where?: Country_stateWhereInput | undefined;

  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCountry_state_translationInput, {
    nullable: false
  })
  data!: Country_stateUpdateWithoutCountry_state_translationInput;
}
