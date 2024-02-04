import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_actionCreateOrConnectWithoutApp_flow_action_translationInput } from "../inputs/App_flow_actionCreateOrConnectWithoutApp_flow_action_translationInput";
import { App_flow_actionCreateWithoutApp_flow_action_translationInput } from "../inputs/App_flow_actionCreateWithoutApp_flow_action_translationInput";
import { App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput } from "../inputs/App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput";
import { App_flow_actionUpsertWithoutApp_flow_action_translationInput } from "../inputs/App_flow_actionUpsertWithoutApp_flow_action_translationInput";
import { App_flow_actionWhereUniqueInput } from "../inputs/App_flow_actionWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_actionUpdateOneRequiredWithoutApp_flow_action_translationNestedInput", {})
export class App_flow_actionUpdateOneRequiredWithoutApp_flow_action_translationNestedInput {
  @TypeGraphQL.Field(_type => App_flow_actionCreateWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  create?: App_flow_actionCreateWithoutApp_flow_action_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionCreateOrConnectWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  connectOrCreate?: App_flow_actionCreateOrConnectWithoutApp_flow_action_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpsertWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  upsert?: App_flow_actionUpsertWithoutApp_flow_action_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionWhereUniqueInput, {
    nullable: true
  })
  connect?: App_flow_actionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  update?: App_flow_actionUpdateToOneWithWhereWithoutApp_flow_action_translationInput | undefined;
}
