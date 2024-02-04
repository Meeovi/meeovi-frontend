import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_actionUpdateManyMutationInput } from "../../../inputs/App_flow_actionUpdateManyMutationInput";
import { App_flow_actionWhereInput } from "../../../inputs/App_flow_actionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyApp_flow_actionArgs {
  @TypeGraphQL.Field(_type => App_flow_actionUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_actionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;
}
