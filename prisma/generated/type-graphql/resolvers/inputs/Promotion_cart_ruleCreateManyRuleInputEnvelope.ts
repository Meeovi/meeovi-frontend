import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_cart_ruleCreateManyRuleInput } from "../inputs/Promotion_cart_ruleCreateManyRuleInput";

@TypeGraphQL.InputType("Promotion_cart_ruleCreateManyRuleInputEnvelope", {})
export class Promotion_cart_ruleCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateManyRuleInput], {
    nullable: false
  })
  data!: Promotion_cart_ruleCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
