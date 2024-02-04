import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput } from "../inputs/Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateWithoutRuleInput", {})
export class Promotion_discount_ruleCreateWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput, {
    nullable: false
  })
  promotion_discount!: Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput;
}
