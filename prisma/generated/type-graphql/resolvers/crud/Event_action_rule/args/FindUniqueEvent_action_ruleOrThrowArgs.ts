import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleWhereUniqueInput } from "../../../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEvent_action_ruleOrThrowArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_ruleWhereUniqueInput;
}
