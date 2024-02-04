import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput } from "../inputs/PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput";
import { RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateInput", {})
export class Promotion_cart_ruleUpdateInput {
  @TypeGraphQL.Field(_type => PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput, {
    nullable: true
  })
  promotion?: PromotionUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput | undefined;

  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput | undefined;
}
