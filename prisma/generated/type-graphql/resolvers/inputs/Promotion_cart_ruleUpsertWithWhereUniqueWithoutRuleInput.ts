import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateWithoutRuleInput } from "../inputs/Promotion_cart_ruleCreateWithoutRuleInput";
import { Promotion_cart_ruleUpdateWithoutRuleInput } from "../inputs/Promotion_cart_ruleUpdateWithoutRuleInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput", {})
export class Promotion_cart_ruleUpsertWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleUpdateWithoutRuleInput, {
    nullable: false
  })
  update!: Promotion_cart_ruleUpdateWithoutRuleInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Promotion_cart_ruleCreateWithoutRuleInput;
}
