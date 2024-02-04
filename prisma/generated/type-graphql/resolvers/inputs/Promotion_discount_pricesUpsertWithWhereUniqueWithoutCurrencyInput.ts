import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateWithoutCurrencyInput";
import { Promotion_discount_pricesUpdateWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesUpdateWithoutCurrencyInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput", {})
export class Promotion_discount_pricesUpsertWithWhereUniqueWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesUpdateWithoutCurrencyInput, {
    nullable: false
  })
  update!: Promotion_discount_pricesUpdateWithoutCurrencyInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateWithoutCurrencyInput, {
    nullable: false
  })
  create!: Promotion_discount_pricesCreateWithoutCurrencyInput;
}
