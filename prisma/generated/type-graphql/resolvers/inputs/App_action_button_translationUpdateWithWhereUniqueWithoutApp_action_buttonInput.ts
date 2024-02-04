import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationUpdateWithoutApp_action_buttonInput } from "../inputs/App_action_button_translationUpdateWithoutApp_action_buttonInput";
import { App_action_button_translationWhereUniqueInput } from "../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationUpdateWithWhereUniqueWithoutApp_action_buttonInput", {})
export class App_action_button_translationUpdateWithWhereUniqueWithoutApp_action_buttonInput {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_button_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateWithoutApp_action_buttonInput, {
    nullable: false
  })
  data!: App_action_button_translationUpdateWithoutApp_action_buttonInput;
}
