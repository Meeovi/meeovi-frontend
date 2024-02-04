import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationCreateInput } from "../../../inputs/App_action_button_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationCreateInput, {
    nullable: false
  })
  data!: App_action_button_translationCreateInput;
}
