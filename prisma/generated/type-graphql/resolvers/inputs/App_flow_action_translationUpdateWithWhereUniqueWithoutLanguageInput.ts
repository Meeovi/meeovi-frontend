import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationUpdateWithoutLanguageInput } from "../inputs/App_flow_action_translationUpdateWithoutLanguageInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class App_flow_action_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_action_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: App_flow_action_translationUpdateWithoutLanguageInput;
}
