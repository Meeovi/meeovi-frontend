import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyApp_flow_actionInputEnvelope } from "../inputs/App_flow_action_translationCreateManyApp_flow_actionInputEnvelope";
import { App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput";
import { App_flow_action_translationCreateWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateWithoutApp_flow_actionInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateNestedManyWithoutApp_flow_actionInput", {})
export class App_flow_action_translationCreateNestedManyWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateWithoutApp_flow_actionInput], {
    nullable: true
  })
  create?: App_flow_action_translationCreateWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_action_translationCreateOrConnectWithoutApp_flow_actionInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateManyApp_flow_actionInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_action_translationCreateManyApp_flow_actionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_action_translationWhereUniqueInput[] | undefined;
}
