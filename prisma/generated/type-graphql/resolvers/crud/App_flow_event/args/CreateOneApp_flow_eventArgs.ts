import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventCreateInput } from "../../../inputs/App_flow_eventCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventCreateInput, {
    nullable: false
  })
  data!: App_flow_eventCreateInput;
}
