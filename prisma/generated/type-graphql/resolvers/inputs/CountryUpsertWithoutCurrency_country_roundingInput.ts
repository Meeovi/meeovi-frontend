import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryCreateWithoutCurrency_country_roundingInput } from "../inputs/CountryCreateWithoutCurrency_country_roundingInput";
import { CountryUpdateWithoutCurrency_country_roundingInput } from "../inputs/CountryUpdateWithoutCurrency_country_roundingInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpsertWithoutCurrency_country_roundingInput", {})
export class CountryUpsertWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CountryUpdateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  update!: CountryUpdateWithoutCurrency_country_roundingInput;

  @TypeGraphQL.Field(_type => CountryCreateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  create!: CountryCreateWithoutCurrency_country_roundingInput;

  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;
}
