import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationUpdateWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationUpdateWithoutApp_script_conditionInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput", {})
export class App_script_condition_translationUpdateWithWhereUniqueWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_condition_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateWithoutApp_script_conditionInput, {
    nullable: false
  })
  data!: App_script_condition_translationUpdateWithoutApp_script_conditionInput;
}
