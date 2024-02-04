import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateWithoutPromotionInput", {})
export class Promotion_cart_ruleUpdateWithoutPromotionInput {
  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutPromotion_cart_ruleNestedInput | undefined;
}
