import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_action_ruleScalarWhereInput } from "../inputs/Event_action_ruleScalarWhereInput";
import { Event_action_ruleUpdateManyMutationInput } from "../inputs/Event_action_ruleUpdateManyMutationInput";

@TypeGraphQL.InputType("Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput", {})
export class Event_action_ruleUpdateManyWithWhereWithoutEvent_actionInput {
  @TypeGraphQL.Field(_type => Event_action_ruleScalarWhereInput, {
    nullable: false
  })
  where!: Event_action_ruleScalarWhereInput;

  @TypeGraphQL.Field(_type => Event_action_ruleUpdateManyMutationInput, {
    nullable: false
  })
  data!: Event_action_ruleUpdateManyMutationInput;
}
