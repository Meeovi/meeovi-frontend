import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionWhereInput } from "../../../inputs/App_flow_actionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;
}
