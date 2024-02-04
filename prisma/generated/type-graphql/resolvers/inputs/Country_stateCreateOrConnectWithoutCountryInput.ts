import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_stateCreateWithoutCountryInput } from "../inputs/Country_stateCreateWithoutCountryInput";
import { Country_stateWhereUniqueInput } from "../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.InputType("Country_stateCreateOrConnectWithoutCountryInput", {})
export class Country_stateCreateOrConnectWithoutCountryInput {
  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;

  @TypeGraphQL.Field(_type => Country_stateCreateWithoutCountryInput, {
    nullable: false
  })
  create!: Country_stateCreateWithoutCountryInput;
}
