import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationUpdateInput } from "../../../inputs/App_action_button_translationUpdateInput";
import { App_action_button_translationWhereUniqueInput } from "../../../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationUpdateInput, {
    nullable: false
  })
  data!: App_action_button_translationUpdateInput;

  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_button_translationWhereUniqueInput;
}
