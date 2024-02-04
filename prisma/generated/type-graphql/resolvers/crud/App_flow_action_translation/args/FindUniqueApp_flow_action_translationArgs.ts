import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationWhereUniqueInput } from "../../../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_action_translationWhereUniqueInput;
}
