import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCountry_translationInput } from "../inputs/CountryCreateWithoutCountry_translationInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutCountry_translationInput", {})
export class CountryCreateOrConnectWithoutCountry_translationInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCountry_translationInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCountry_translationInput;
}
