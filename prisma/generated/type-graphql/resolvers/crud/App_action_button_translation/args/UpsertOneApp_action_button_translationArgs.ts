import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationCreateInput } from "../../../inputs/App_action_button_translationCreateInput";
import { App_action_button_translationUpdateInput } from "../../../inputs/App_action_button_translationUpdateInput";
import { App_action_button_translationWhereUniqueInput } from "../../../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_button_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateInput, {
    nullable: false
  })
  create!: App_action_button_translationCreateInput;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateInput, {
    nullable: false
  })
  update!: App_action_button_translationUpdateInput;
}
