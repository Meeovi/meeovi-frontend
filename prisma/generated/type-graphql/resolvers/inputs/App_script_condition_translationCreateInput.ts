import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput } from "../inputs/App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput";
import { LanguageCreateNestedOneWithoutApp_script_condition_translationInput } from "../inputs/LanguageCreateNestedOneWithoutApp_script_condition_translationInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateInput", {})
export class App_script_condition_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  app_script_condition!: App_script_conditionCreateNestedOneWithoutApp_script_condition_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutApp_script_condition_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutApp_script_condition_translationInput;
}
