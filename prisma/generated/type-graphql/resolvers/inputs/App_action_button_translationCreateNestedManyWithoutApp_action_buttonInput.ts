import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_button_translationCreateManyApp_action_buttonInputEnvelope } from "../inputs/App_action_button_translationCreateManyApp_action_buttonInputEnvelope";
import { App_action_button_translationCreateOrConnectWithoutApp_action_buttonInput } from "../inputs/App_action_button_translationCreateOrConnectWithoutApp_action_buttonInput";
import { App_action_button_translationCreateWithoutApp_action_buttonInput } from "../inputs/App_action_button_translationCreateWithoutApp_action_buttonInput";
import { App_action_button_translationWhereUniqueInput } from "../inputs/App_action_button_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput", {})
export class App_action_button_translationCreateNestedManyWithoutApp_action_buttonInput {
  @TypeGraphQL.Field(_type => [App_action_button_translationCreateWithoutApp_action_buttonInput], {
    nullable: true
  })
  create?: App_action_button_translationCreateWithoutApp_action_buttonInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationCreateOrConnectWithoutApp_action_buttonInput], {
    nullable: true
  })
  connectOrCreate?: App_action_button_translationCreateOrConnectWithoutApp_action_buttonInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationCreateManyApp_action_buttonInputEnvelope, {
    nullable: true
  })
  createMany?: App_action_button_translationCreateManyApp_action_buttonInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_action_button_translationWhereUniqueInput[] | undefined;
}
