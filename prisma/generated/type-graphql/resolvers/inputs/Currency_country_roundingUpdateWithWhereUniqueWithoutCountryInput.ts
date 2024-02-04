import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingUpdateWithoutCountryInput } from "../inputs/Currency_country_roundingUpdateWithoutCountryInput";
import { Currency_country_roundingWhereUniqueInput } from "../inputs/Currency_country_roundingWhereUniqueInput";

@TypeGraphQL.InputType("Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput", {})
export class Currency_country_roundingUpdateWithWhereUniqueWithoutCountryInput {
  @TypeGraphQL.Field(_type => Currency_country_roundingWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_country_roundingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_country_roundingUpdateWithoutCountryInput, {
    nullable: false
  })
  data!: Currency_country_roundingUpdateWithoutCountryInput;
}
