import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCountry_stateInput } from "../inputs/CountryCreateWithoutCountry_stateInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutCountry_stateInput", {})
export class CountryCreateOrConnectWithoutCountry_stateInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_stateInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCountry_stateInput;
}
