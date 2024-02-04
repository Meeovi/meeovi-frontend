import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionCreateInput } from "../../../inputs/App_flow_actionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionCreateInput, {
    nullable: false
  })
  data!: App_flow_actionCreateInput;
}
