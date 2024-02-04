import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationCreateInput } from "../../../inputs/App_flow_action_translationCreateInput";
import { App_flow_action_translationUpdateInput } from "../../../inputs/App_flow_action_translationUpdateInput";
import { App_flow_action_translationWhereUniqueInput } from "../../../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_action_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateInput, {
    nullable: false
  })
  create!: App_flow_action_translationCreateInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateInput, {
    nullable: false
  })
  update!: App_flow_action_translationUpdateInput;
}
