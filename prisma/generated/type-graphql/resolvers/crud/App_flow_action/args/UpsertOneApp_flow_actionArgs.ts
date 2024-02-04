import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionCreateInput } from "../../../inputs/App_flow_actionCreateInput";
import { App_flow_actionUpdateInput } from "../../../inputs/App_flow_actionUpdateInput";
import { App_flow_actionWhereUniqueInput } from "../../../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_actionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_actionCreateInput, {
    nullable: false
  })
  create!: App_flow_actionCreateInput;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateInput, {
    nullable: false
  })
  update!: App_flow_actionUpdateInput;
}
