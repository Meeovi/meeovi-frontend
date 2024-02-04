import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleCreateManyEvent_actionInput } from "../inputs/Event_action_ruleCreateManyEvent_actionInput";

@TypeGraphQL.InputType("Event_action_ruleCreateManyEvent_actionInputEnvelope", {})
export class Event_action_ruleCreateManyEvent_actionInputEnvelope {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateManyEvent_actionInput], {
    nullable: false
  })
  data!: Event_action_ruleCreateManyEvent_actionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
