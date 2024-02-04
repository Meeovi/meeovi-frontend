import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleCreateInput } from "../../../inputs/Event_action_ruleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleCreateInput, {
    nullable: false
  })
  data!: Event_action_ruleCreateInput;
}
