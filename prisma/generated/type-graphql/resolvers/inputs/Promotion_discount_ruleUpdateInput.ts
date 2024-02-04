import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discountUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput } from "../inputs/Promotion_discountUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput";
import { RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateInput", {})
export class Promotion_discount_ruleUpdateInput {
  @TypeGraphQL.Field(_type => Promotion_discountUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput, {
    nullable: true
  })
  promotion_discount?: Promotion_discountUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput | undefined;

  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput | undefined;
}
