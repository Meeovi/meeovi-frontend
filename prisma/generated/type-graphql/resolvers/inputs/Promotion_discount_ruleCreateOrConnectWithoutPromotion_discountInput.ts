import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateWithoutPromotion_discountInput } from "../inputs/Promotion_discount_ruleCreateWithoutPromotion_discountInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput", {})
export class Promotion_discount_ruleCreateOrConnectWithoutPromotion_discountInput {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateWithoutPromotion_discountInput, {
    nullable: false
  })
  create!: Promotion_discount_ruleCreateWithoutPromotion_discountInput;
}
