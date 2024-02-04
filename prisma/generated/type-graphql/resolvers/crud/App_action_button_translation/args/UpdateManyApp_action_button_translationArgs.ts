import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationUpdateManyMutationInput } from "../../../inputs/App_action_button_translationUpdateManyMutationInput";
import { App_action_button_translationWhereInput } from "../../../inputs/App_action_button_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_action_button_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  where?: App_action_button_translationWhereInput | undefined;
}
