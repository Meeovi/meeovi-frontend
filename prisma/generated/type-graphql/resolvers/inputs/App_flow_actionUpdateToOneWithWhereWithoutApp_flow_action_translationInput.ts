import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionUpdateWithoutApp_flow_action_translationInput } from "../inputs/App_flow_actionUpdateWithoutApp_flow_action_translationInput";
import { App_flow_actionWhereInput } from "../inputs/App_flow_actionWhereInput";

@TypeGraphQL.InputType("App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput", {})
export class App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => App_flow_actionWhereInput, {
    nullable: true
  })
  where?: App_flow_actionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateWithoutApp_flow_action_translationInput, {
    nullable: false
  })
  data!: App_flow_actionUpdateWithoutApp_flow_action_translationInput;
}
