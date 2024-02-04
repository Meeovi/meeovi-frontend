import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateWithoutRuleInput } from "../inputs/Promotion_discount_ruleCreateWithoutRuleInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateOrConnectWithoutRuleInput", {})
export class Promotion_discount_ruleCreateOrConnectWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateWithoutRuleInput, {
    nullable: false
  })
  create!: Promotion_discount_ruleCreateWithoutRuleInput;
}
