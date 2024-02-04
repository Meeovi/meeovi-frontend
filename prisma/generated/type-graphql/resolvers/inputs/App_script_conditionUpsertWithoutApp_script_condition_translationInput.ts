import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateWithoutApp_script_condition_translationInput } from "../inputs/App_script_conditionCreateWithoutApp_script_condition_translationInput";
import { App_script_conditionUpdateWithoutApp_script_condition_translationInput } from "../inputs/App_script_conditionUpdateWithoutApp_script_condition_translationInput";
import { App_script_conditionWhereInput } from "../inputs/App_script_conditionWhereInput";

@TypeGraphQL.InputType("App_script_conditionUpsertWithoutApp_script_condition_translationInput", {})
export class App_script_conditionUpsertWithoutApp_script_condition_translationInput {
  @TypeGraphQL.Field(_type => App_script_conditionUpdateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  update!: App_script_conditionUpdateWithoutApp_script_condition_translationInput;

  @TypeGraphQL.Field(_type => App_script_conditionCreateWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  create!: App_script_conditionCreateWithoutApp_script_condition_translationInput;

  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;
}
