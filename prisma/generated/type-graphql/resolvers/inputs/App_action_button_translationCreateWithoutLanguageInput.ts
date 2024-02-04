import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateNestedOneWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonCreateNestedOneWithoutApp_action_button_translationInput";

@TypeGraphQL.InputType("App_action_button_translationCreateWithoutLanguageInput", {})
export class App_action_button_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonCreateNestedOneWithoutApp_action_button_translationInput, {
    nullable: false
  })
  app_action_button!: App_action_buttonCreateNestedOneWithoutApp_action_button_translationInput;
}
