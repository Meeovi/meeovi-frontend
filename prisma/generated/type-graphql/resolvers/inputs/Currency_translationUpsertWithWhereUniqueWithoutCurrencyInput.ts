import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateWithoutCurrencyInput } from "../inputs/Currency_translationCreateWithoutCurrencyInput";
import { Currency_translationUpdateWithoutCurrencyInput } from "../inputs/Currency_translationUpdateWithoutCurrencyInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput", {})
export class Currency_translationUpsertWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Currency_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Currency_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Currency_translationUpdateWithoutCurrencyInput, {
    nullable: false
  })
  update!: Currency_translationUpdateWithoutCurrencyInput;

  @TypeGraphQL.Field(_type => Currency_translationCreateWithoutCurrencyInput, {
    nullable: false
  })
  create!: Currency_translationCreateWithoutCurrencyInput;
}
