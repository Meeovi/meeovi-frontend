import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput } from "../inputs/Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput";
import { RuleCreateNestedOneWithoutPromotion_discount_ruleInput } from "../inputs/RuleCreateNestedOneWithoutPromotion_discount_ruleInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateInput", {})
export class Promotion_discount_ruleCreateInput {
  @TypeGraphQL.Field(_type => Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput, {
    nullable: false
  })
  promotion_discount!: Promotion_discountCreateNestedOneWithoutPromotion_discount_ruleInput;

  @TypeGraphQL.Field(_type => RuleCreateNestedOneWithoutPromotion_discount_ruleInput, {
    nullable: false
  })
  rule!: RuleCreateNestedOneWithoutPromotion_discount_ruleInput;
}
