import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCurrency_country_roundingInput } from "../inputs/CurrencyCreateWithoutCurrency_country_roundingInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";

@TypeGraphQL.InputType("CurrencyCreateOrConnectWithoutCurrency_country_roundingInput", {})
export class CurrencyCreateOrConnectWithoutCurrency_country_roundingInput {
  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: false
  })
  where!: CurrencyWhereUniqueInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_country_roundingInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCurrency_country_roundingInput;
}
