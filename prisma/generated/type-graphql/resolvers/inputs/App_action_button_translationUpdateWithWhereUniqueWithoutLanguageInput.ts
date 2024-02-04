import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationUpdateWithoutLanguageInput } from "../inputs/App_action_button_translationUpdateWithoutLanguageInput";
import { App_action_button_translationWhereUniqueInput } from "../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class App_action_button_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_button_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: App_action_button_translationUpdateWithoutLanguageInput;
}
