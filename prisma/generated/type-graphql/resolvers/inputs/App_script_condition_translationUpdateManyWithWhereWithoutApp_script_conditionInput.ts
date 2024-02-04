import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationScalarWhereInput } from "../inputs/App_script_condition_translationScalarWhereInput";
import { App_script_condition_translationUpdateManyMutationInput } from "../inputs/App_script_condition_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput", {})
export class App_script_condition_translationUpdateManyWithWhereWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => App_script_condition_translationScalarWhereInput, {
    nullable: false
  })
  where!: App_script_condition_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_script_condition_translationUpdateManyMutationInput;
}
