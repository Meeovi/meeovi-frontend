import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateWithoutLanguageInput } from "../inputs/App_action_button_translationCreateWithoutLanguageInput";
import { App_action_button_translationUpdateWithoutLanguageInput } from "../inputs/App_action_button_translationUpdateWithoutLanguageInput";
import { App_action_button_translationWhereUniqueInput } from "../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class App_action_button_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_action_button_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: App_action_button_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: App_action_button_translationCreateWithoutLanguageInput;
}
