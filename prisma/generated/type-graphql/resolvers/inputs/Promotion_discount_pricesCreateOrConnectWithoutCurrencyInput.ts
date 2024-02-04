import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateWithoutCurrencyInput } from "../inputs/Promotion_discount_pricesCreateWithoutCurrencyInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput", {})
export class Promotion_discount_pricesCreateOrConnectWithoutCurrencyInput {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateWithoutCurrencyInput, {
    nullable: false
  })
  create!: Promotion_discount_pricesCreateWithoutCurrencyInput;
}
