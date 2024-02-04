import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateWithoutCurrency_country_roundingInput";
import { CurrencyUpdateWithoutCurrency_country_roundingInput } from "../inputs/CurrencyUpdateWithoutCurrency_country_roundingInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutCurrency_country_roundingInput", {})
export class CurrencyUpsertWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutCurrency_country_roundingInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCurrency_country_roundingInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
