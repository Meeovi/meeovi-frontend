import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleUpdateInput } from "../../../inputs/Event_action_ruleUpdateInput";
import { Event_action_ruleWhereUniqueInput } from "../../../inputs/Event_action_ruleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => Event_action_ruleUpdateInput, {
    nullable: false
  })
  data!: Event_action_ruleUpdateInput;

  @TypeGraphQL.Field(_type => Event_action_ruleWhereUniqueInput, {
    nullable: false
  })
  where!: Event_action_ruleWhereUniqueInput;
}
