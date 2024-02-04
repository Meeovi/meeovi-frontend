import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationCreateWithoutApp_flow_actionInput";
import { App_flow_action_translationUpdateWithoutApp_flow_actionInput } from "../inputs/App_flow_action_translationUpdateWithoutApp_flow_actionInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput", {})
export class App_flow_action_translationUpsertWithWhereUniqueWithoutApp_flow_actionInput {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_action_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateWithoutApp_flow_actionInput, {
    nullable: false
  })
  update!: App_flow_action_translationUpdateWithoutApp_flow_actionInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateWithoutApp_flow_actionInput, {
    nullable: false
  })
  create!: App_flow_action_translationCreateWithoutApp_flow_actionInput;
}
