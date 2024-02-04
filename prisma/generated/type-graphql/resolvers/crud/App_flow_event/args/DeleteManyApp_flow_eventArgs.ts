import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventWhereInput } from "../../../inputs/App_flow_eventWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;
}
