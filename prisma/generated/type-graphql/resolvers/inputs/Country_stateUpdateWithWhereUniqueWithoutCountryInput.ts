import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateUpdateWithoutCountryInput } from "../inputs/Country_stateUpdateWithoutCountryInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpdateWithWhereUniqueWithoutCountryInput", {})
export class Country_stateUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: Country_stateUpdateWithoutCountryInput;
}
