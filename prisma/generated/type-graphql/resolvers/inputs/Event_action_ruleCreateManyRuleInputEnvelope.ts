import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyRuleInput } from "../inputs/Event_action_ruleCreateManyRuleInput";

@TypeGraphQL.InputType("Event_action_ruleCreateManyRuleInputEnvelope", {})
export class Event_action_ruleCreateManyRuleInputEnvelope {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateManyRuleInput], {
    nullable: false
  })
  data!: Event_action_ruleCreateManyRuleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
