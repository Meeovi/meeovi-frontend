import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput } from "../inputs/PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateWithoutRuleInput", {})
export class Promotion_cart_ruleUpdateWithoutRuleInput {
  @TypeGraphQL.Field(_type => PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput, {
    nullable: true
  })
  promotion?: PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput | undefined;
}
