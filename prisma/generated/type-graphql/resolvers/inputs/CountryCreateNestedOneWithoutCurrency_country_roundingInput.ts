import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateOrConnectWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateOrConnectWithoutCurrency_country_roundingInput";
import { CountryCreateWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateWithoutCurrency_country_roundingInput";
import { CountryWhereUniqueInput } from "../inputs/CountryWhereUniqueInput";

@TypeGraphQL.InputType("CountryCreateNestedOneWithoutCurrency_country_roundingInput", {})
export class CountryCreateNestedOneWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CountryCreateWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  create?: CountryCreateWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CountryCreateOrConnectWithoutCurrency_country_roundingInput, {
    nullable: true
  })
  connectOrCreate?: CountryCreateOrConnectWithoutCurrency_country_roundingInput | undefined;

  @TypeGraphQL.Field(_type => CountryWhereUniqueInput, {
    nullable: true
  })
  connect?: CountryWhereUniqueInput | undefined;
}
