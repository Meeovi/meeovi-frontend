import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateManyRuleInputEnvelope } from "../inputs/Promotion_discount_ruleCreateManyRuleInputEnvelope";
import { Promotion_discount_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Promotion_discount_ruleCreateOrConnectWithoutRuleInput";
import { Promotion_discount_ruleCreateWithoutRuleInput } from "../inputs/Promotion_discount_ruleCreateWithoutRuleInput";
import { Promotion_discount_ruleWhereUniqueInput } from "../inputs/Promotion_discount_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateNestedManyWithoutRuleInput", {})
export class Promotion_discount_ruleCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Promotion_discount_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_discount_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_discount_ruleCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_discount_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_discount_ruleWhereUniqueInput[] | undefined;
}
