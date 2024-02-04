import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateWithoutLanguageInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateOrConnectWithoutLanguageInput", {})
export class App_flow_action_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_flow_action_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: App_flow_action_translationCreateWithoutLanguageInput;
}
