import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationUpdateManyMutationInput } from "../../../inputs/App_flow_action_translationUpdateManyMutationInput";
import { App_flow_action_translationWhereInput } from "../../../inputs/App_flow_action_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_action_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  where?: App_flow_action_translationWhereInput | undefined;
}
