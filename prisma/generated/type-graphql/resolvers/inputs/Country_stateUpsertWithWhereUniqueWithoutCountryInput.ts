import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCountryInput } from "../inputs/Country_stateCreateWithoutCountryInput";
import { Country_stateUpdateWithoutCountryInput } from "../inputs/Country_stateUpdateWithoutCountryInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateUpsertWithWhereUniqueWithoutCountryInput", {})
export class Country_stateUpsertWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateUpdateWithoutCountryInput, {
    nullable: false
  })
  update!: Country_stateUpdateWithoutCountryInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCountryInput;
}
