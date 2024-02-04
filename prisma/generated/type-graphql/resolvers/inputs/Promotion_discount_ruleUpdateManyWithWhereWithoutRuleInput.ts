import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleScalarWhereInput } from "../inputs/Promotion_discount_ruleScalarWhereInput";
import { Promotion_discount_ruleUpdateManyMutationInput } from "../inputs/Promotion_discount_ruleUpdateManyMutationInput";

@TypeGraphQL.InputType("Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput", {})
export class Promotion_discount_ruleUpdateManyWithWhereWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_discount_ruleScalarWhereInput, {
    nullable: false
  })
  where!: Promotion_discount_ruleScalarWhereInput;

  @TypeGraphQL.Field(_type => Promotion_discount_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_discount_ruleUpdateManyMutationInput;
}
