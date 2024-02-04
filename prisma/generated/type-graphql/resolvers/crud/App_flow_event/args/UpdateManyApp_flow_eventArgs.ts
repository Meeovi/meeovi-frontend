import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_eventUpdateManyMutationInput } from "../../../inputs/App_flow_eventUpdateManyMutationInput";
import { App_flow_eventWhereInput } from "../../../inputs/App_flow_eventWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_flow_eventArgs {
  @TypeGraphQL.Field(_type => App_flow_eventUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_eventUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_flow_eventWhereInput, {
    nullable: true
  })
  where?: App_flow_eventWhereInput | undefined;
}
