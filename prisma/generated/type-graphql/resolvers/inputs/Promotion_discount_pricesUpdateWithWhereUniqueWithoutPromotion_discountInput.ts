import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesUpdateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_pricesUpdateWithoutPromotion_discountInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesUpdateWithWhereUniqueWithoutPromotion_discountInput", {})
export class Promotion_discount_pricesUpdateWithWhereUniqueWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesUpdateWithoutPromotion_discountInput, {
    nullable: false
  })
  data!: Promotion_discount_pricesUpdateWithoutPromotion_discountInput;
}
