import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateWithoutCurrency_country_roundingInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateOrConnectWithoutCurrency_country_roundingInput", {})
export class CountryCreateOrConnectWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: false
  })
  where!: CountryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCurrency_country_roundingInput;
}
