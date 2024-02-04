import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleUpdateWithoutRuleInput } from "../inputs/Promotion_discount_ruleUpdateWithoutRuleInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput", {})
export class Promotion_discount_ruleUpdateWithWhereUniqueWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleUpdateWithoutRuleInput, {
    nullable: false
  })
  data!: Promotion_discount_ruleUpdateWithoutRuleInput;
}
