import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationScalarWhereInput } from "../inputs/App_flow_action_translationScalarWhereInput";
import { App_flow_action_translationUpdateManyMutationInput } from "../inputs/App_flow_action_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class App_flow_action_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_flow_action_translationScalarWhereInput, {
    nullable: false
  })
  where!: App_flow_action_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => App_flow_action_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_flow_action_translationUpdateManyMutationInput;
}
