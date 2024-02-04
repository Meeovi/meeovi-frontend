import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RuleCreateNestedOneWithoutPromotion_discount_ruleInput } from "../inputs/RuleCreateNestedOneWithoutPromotion_discount_ruleInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateWithoutPromotion_discountInput", {})
export class Promotion_discount_ruleCreateWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutPromotion_discount_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutPromotion_discount_ruleInput;
}
