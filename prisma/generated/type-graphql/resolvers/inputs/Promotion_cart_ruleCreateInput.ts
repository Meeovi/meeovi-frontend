import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionCreateNestedOneWithoutPromotion_cart_ruleInput } from "../inputs/PromotionCreateNestedOneWithoutPromotion_cart_ruleInput";
import { RuleCreateNestedOneWithoutPromotion_cart_ruleInput } from "../inputs/RuleCreateNestedOneWithoutPromotion_cart_ruleInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateInput", {})
export class Promotion_cart_ruleCreateInput {
  @TypeGraphQL.Field(_type => PromotionCreateNestedOneWithoutPromotion_cart_ruleInput, {
    nullable: false
  })
  promotion!: PromotionCreateNestedOneWithoutPromotion_cart_ruleInput;

  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutPromotion_cart_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutPromotion_cart_ruleInput;
}
