import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_pricesCreateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_pricesCreateWithoutPromotion_discountInput";
import { Promotion_discount_pricesWhereUniqueInput } from "../inputs/Promotion_discount_pricesWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput", {})
export class Promotion_discount_pricesCreateOrConnectWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => Promotion_discount_pricesWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_pricesWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_pricesCreateWithoutPromotion_discountInput, {
    nullable: false
  })
  create!: Promotion_discount_pricesCreateWithoutPromotion_discountInput;
}
