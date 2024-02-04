import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput } from "../inputs/RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateWithoutPromotion_discountInput", {})
export class Promotion_discount_ruleUpdateWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput, {
    nullable: true
  })
  rule?: RuleUpdateOneRequiredWithoutPromotion_discount_ruleNestedInput | undefined;
}
