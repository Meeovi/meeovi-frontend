import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryUpdateWithoutCurrency_country_roundingInput } from "../inputs/CountryUpdateWithoutCurrency_country_roundingInput";
import { CountryWhereInput } from "../inputs/CountryWhereInput";

@TypeGraphQL.InputType("CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput", {})
export class CountryUpdateToOneWithWhereWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CountryWhereInput, {
    nullable: true
  })
  where?: CountryWhereInput | undefined;

  @TypeGraphQL.Field(_type => CountryUpdateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  data!: CountryUpdateWithoutCurrency_country_roundingInput;
}
