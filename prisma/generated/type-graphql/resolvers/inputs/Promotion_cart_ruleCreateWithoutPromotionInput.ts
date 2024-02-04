import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleCreateNestedOneWithoutPromotion_cart_ruleInput } from "../inputs/RuleCreateNestedOneWithoutPromotion_cart_ruleInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateWithoutPromotionInput", {})
export class Promotion_cart_ruleCreateWithoutPromotionInput {
  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutPromotion_cart_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutPromotion_cart_ruleInput;
}
