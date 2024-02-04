import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Event_actionCreateWithoutEvent_action_ruleInput } from "../inputs/Event_actionCreateWithoutEvent_action_ruleInput";
import { Event_actionUpdateWithoutEvent_action_ruleInput } from "../inputs/Event_actionUpdateWithoutEvent_action_ruleInput";
import { Event_actionWhereInput } from "../inputs/Event_actionWhereInput";

@TypeGraphQL.InputType("Event_actionUpsertWithoutEvent_action_ruleInput", {})
export class Event_actionUpsertWithoutEvent_action_ruleInput {
  @TypeGraphQL.Field(_type => Event_actionUpdateWithoutEvent_action_ruleInput, {
    nullable: false
  })
  update!: Event_actionUpdateWithoutEvent_action_ruleInput;

  @TypeGraphQL.Field(_type => Event_actionCreateWithoutEvent_action_ruleInput, {
    nullable: false
  })
  create!: Event_actionCreateWithoutEvent_action_ruleInput;

  @TypeGraphQL.Field(_type => Event_actionWhereInput, {
    nullable: true
  })
  where?: Event_actionWhereInput | undefined;
}
