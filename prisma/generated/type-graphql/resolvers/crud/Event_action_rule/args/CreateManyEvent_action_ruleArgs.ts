import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Event_action_ruleCreateManyInput } from "../../../inputs/Event_action_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEvent_action_ruleArgs {
  @TypeGraphQL.Field(_type => [Event_action_ruleCreateManyInput], {
    nullable: false
  })
  data!: Event_action_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
