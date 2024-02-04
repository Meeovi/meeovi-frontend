import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionCreateNestedOneWithoutPromotion_cart_ruleInput } from "../inputs/PromotionCreateNestedOneWithoutPromotion_cart_ruleInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateWithoutRuleInput", {})
export class Promotion_cart_ruleCreateWithoutRuleInput {
  @TypeGraphQL.Field(_type => PromotionCreateNestedOneWithoutPromotion_cart_ruleInput, {
    nullable: false
  })
  promotion!: PromotionCreateNestedOneWithoutPromotion_cart_ruleInput;
}
