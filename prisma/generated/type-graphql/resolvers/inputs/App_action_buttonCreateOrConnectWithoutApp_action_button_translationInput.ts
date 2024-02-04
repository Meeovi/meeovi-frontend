import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonCreateWithoutApp_action_button_translationInput";
import { App_action_buttonWhereUniqueInput } from "../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.InputType("App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput", {})
export class App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_buttonWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_buttonCreateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  create!: App_action_buttonCreateWithoutApp_action_button_translationInput;
}
