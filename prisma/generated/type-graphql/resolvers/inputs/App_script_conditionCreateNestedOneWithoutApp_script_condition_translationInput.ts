import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateOrConnectWithoutApp_script_condition_translationInput } from "../inputs/App_script_conditionCreateOrConnectWithoutApp_script_condition_translationInput";
import { App_script_conditionCreateWithoutApp_script_condition_translationInput } from "../inputs/App_script_conditionCreateWithoutApp_script_condition_translationInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput", {})
export class App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => App_script_conditionCreateWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  create?: App_script_conditionCreateWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateOrConnectWithoutApp_script_condition_translationInput, {
    nullable: true
  })
  connectOrCreate?: App_script_conditionCreateOrConnectWithoutApp_script_condition_translationInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: true
  })
  connect?: App_script_conditionWhereUniqueInput | undefined;
}
