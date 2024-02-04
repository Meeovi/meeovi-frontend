import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyRuleInputEnvelope } from "../inputs/Promotion_cart_ruleCreateManyRuleInputEnvelope";
import { Promotion_cart_ruleCreateOrConnectWithoutRuleInput } from "../inputs/Promotion_cart_ruleCreateOrConnectWithoutRuleInput";
import { Promotion_cart_ruleCreateWithoutRuleInput } from "../inputs/Promotion_cart_ruleCreateWithoutRuleInput";
import { Promotion_cart_ruleWhereUniqueInput } from "../inputs/Promotion_cart_ruleWhereUniqueInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateNestedManyWithoutRuleInput", {})
export class Promotion_cart_ruleCreateNestedManyWithoutRuleInput {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateWithoutRuleInput], {
    nullable: true
  })
  create?: Promotion_cart_ruleCreateWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateOrConnectWithoutRuleInput], {
    nullable: true
  })
  connectOrCreate?: Promotion_cart_ruleCreateOrConnectWithoutRuleInput[] | undefined;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleCreateManyRuleInputEnvelope, {
    nullable: true
  })
  createMany?: Promotion_cart_ruleCreateManyRuleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Promotion_cart_ruleWhereUniqueInput], {
    nullable: true
  })
  connect?: Promotion_cart_ruleWhereUniqueInput[] | undefined;
}
