import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionScalarWhereInput } from "../inputs/App_script_conditionScalarWhereInput";
import { App_script_conditionUpdateManyMutationInput } from "../inputs/App_script_conditionUpdateManyMutationInput";

@TypeGraphQL.InputType("App_script_conditionUpdateManyWithWhereWithoutAppInput", {})
export class App_script_conditionUpdateManyWithWhereWithoutAppInput {
  @TypeGraphQL.Field(_type => App_script_conditionScalarWhereInput, {
    nullable: false
  })
  where!: App_script_conditionScalarWhereInput;

  @TypeGraphQL.Field(_type => App_script_conditionUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_script_conditionUpdateManyMutationInput;
}
