import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Promotion_discount_ruleCreateManyRuleInput } from "../inputs/Promotion_discount_ruleCreateManyRuleInput";

@TypeGraphQL.InputType("Promotion_discount_ruleCreateManyRuleInputEnvelope", {})
export class Promotion_discount_ruleCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateManyRuleInput], {
    nullable: false
  })
  data!: Promotion_discount_ruleCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
