import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonCreateWithoutApp_action_button_translationInput";
import { App_action_buttonUpdateWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonUpdateWithoutApp_action_button_translationInput";
import { App_action_buttonWhereInput } from "../inputs/App_action_buttonWhereInput";

@TypeGraphQL.InputType("App_action_buttonUpsertWithoutApp_action_button_translationInput", {})
export class App_action_buttonUpsertWithoutApp_action_button_translationInput {
  @TypeGraphQL.Field(_type => App_action_buttonUpdateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  update!: App_action_buttonUpdateWithoutApp_action_button_translationInput;

  @TypeGraphQL.Field(_type => App_action_buttonCreateWithoutApp_action_button_translationInput, {
    nullable: false
  })
  create!: App_action_buttonCreateWithoutApp_action_button_translationInput;

  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  where?: App_action_buttonWhereInput | undefined;
}
