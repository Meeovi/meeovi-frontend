import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionUpdateInput } from "../../../inputs/App_flow_actionUpdateInput";
import { App_flow_actionWhereUniqueInput } from "../../../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionUpdateInput, {
    nullable: false
  })
  data!: App_flow_actionUpdateInput;

  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_actionWhereUniqueInput;
}
