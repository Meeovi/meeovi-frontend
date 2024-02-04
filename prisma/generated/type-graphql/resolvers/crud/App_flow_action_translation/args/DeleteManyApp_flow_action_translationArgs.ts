import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationWhereInput } from "../../../inputs/App_flow_action_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  where?: App_flow_action_translationWhereInput | undefined;
}
