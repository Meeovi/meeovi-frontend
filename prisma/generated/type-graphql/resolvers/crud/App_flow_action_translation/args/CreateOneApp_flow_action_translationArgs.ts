import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationCreateInput } from "../../../inputs/App_flow_action_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationCreateInput, {
    nullable: false
  })
  data!: App_flow_action_translationCreateInput;
}
