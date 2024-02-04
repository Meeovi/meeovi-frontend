import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyCreateWithoutCurrency_translationInput } from "../inputs/CurrencyCreateWithoutCurrency_translationInput";
import { CurrencyUpdateWithoutCurrency_translationInput } from "../inputs/CurrencyUpdateWithoutCurrency_translationInput";
import { CurrencyWhereInput } from "../inputs/CurrencyWhereInput";

@TypeGraphQL.InputType("CurrencyUpsertWithoutCurrency_translationInput", {})
export class CurrencyUpsertWithoutCurrency_translationInput {
  @TypeGraphQL.Field(_type => CurrencyUpdateWithoutCurrency_translationInput, {
    nullable: false
  })
  update!: CurrencyUpdateWithoutCurrency_translationInput;

  @TypeGraphQL.Field(_type => CurrencyCreateWithoutCurrency_translationInput, {
    nullable: false
  })
  create!: CurrencyCreateWithoutCurrency_translationInput;

  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
