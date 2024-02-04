import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationScalarWhereInput } from "../inputs/App_action_button_translationScalarWhereInput";
import { App_action_button_translationUpdateManyMutationInput } from "../inputs/App_action_button_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("App_action_button_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class App_action_button_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_action_button_translationScalarWhereInput, {
    nullable: false
  })
  where!: App_action_button_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => App_action_button_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_action_button_translationUpdateManyMutationInput;
}
