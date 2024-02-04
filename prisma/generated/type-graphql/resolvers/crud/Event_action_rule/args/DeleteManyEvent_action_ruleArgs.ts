import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleWhereInput } from "../../../inputs/Event_action_ruleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleWhereInput, {
    nullable: true
  })
  where?: Event_action_ruleWhereInput | undefined;
}
