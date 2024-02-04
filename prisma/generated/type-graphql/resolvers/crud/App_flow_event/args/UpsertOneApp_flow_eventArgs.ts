import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventCreateInput } from "../../../inputs/App_flow_eventCreateInput";
import { App_flow_eventUpdateInput } from "../../../inputs/App_flow_eventUpdateInput";
import { App_flow_eventWhereUniqueInput } from "../../../inputs/App_flow_eventWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_eventWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_eventCreateInput, {
    nullable: false
  })
  create!: App_flow_eventCreateInput;

  @TypeGraphQL.Field(_type => App_flow_eventUpdateInput, {
    nullable: false
  })
  update!: App_flow_eventUpdateInput;
}
