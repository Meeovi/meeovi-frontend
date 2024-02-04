import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleScalarWhereInput } from "../inputs/Promotion_cart_ruleScalarWhereInput";
import { Promotion_cart_ruleUpdateManyMutationInput } from "../inputs/Promotion_cart_ruleUpdateManyMutationInput";

@TypeGraphQL.InputType("Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput", {})
export class Promotion_cart_ruleUpdateManyWithWhereWithoutRuleInput {
  @TypeGraphQL.Field(_type => Promotion_cart_ruleScalarWhereInput, {
    nullable: false
  })
  where!: Promotion_cart_ruleScalarWhereInput;

  @TypeGraphQL.Field(_type => Promotion_cart_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_cart_ruleUpdateManyMutationInput;
}
