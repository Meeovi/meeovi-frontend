import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput";
import { App_action_buttonCreateWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonCreateWithoutApp_action_button_translationInput";
import { App_action_buttonUpdateToOneWithWhereWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonUpdateToOneWithWhereWithoutApp_action_button_translationInput";
import { App_action_buttonUpsertWithoutApp_action_button_translationInput } from "../inputs/App_action_buttonUpsertWithoutApp_action_button_translationInput";
import { App_action_buttonWhereUniqueInput } from "../inputs/App_action_buttonWhereUniqueInput";

@TypeGraphQL.InputType("App_action_buttonUpdateOneRequiredWithoutApp_action_button_translationNestedInput", {})
export class App_action_buttonUpdateOneRequiredWithoutApp_action_button_translationNestedInput {
  @TypeGraphQL.Field(_type => App_action_buttonCreateWithoutApp_action_button_translationInput, {
    nullable: true
  })
  create?: App_action_buttonCreateWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput, {
    nullable: true
  })
  connectOrCreate?: App_action_buttonCreateOrConnectWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonUpsertWithoutApp_action_button_translationInput, {
    nullable: true
  })
  upsert?: App_action_buttonUpsertWithoutApp_action_button_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: true
  })
  connect?: App_action_buttonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonUpdateToOneWithWhereWithoutApp_action_button_translationInput, {
    nullable: true
  })
  update?: App_action_buttonUpdateToOneWithWhereWithoutApp_action_button_translationInput | undefined;
}
