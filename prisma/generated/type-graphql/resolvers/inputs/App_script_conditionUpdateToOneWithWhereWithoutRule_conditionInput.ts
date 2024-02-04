import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionUpdateWithoutRule_conditionInput } from "../inputs/App_script_conditionUpdateWithoutRule_conditionInput";
import { App_script_conditionWhereInput } from "../inputs/App_script_conditionWhereInput";

@TypeGraphQL.InputType("App_script_conditionUpdateToOneWithWhereWithoutRule_conditionInput", {})
export class App_script_conditionUpdateToOneWithWhereWithoutRule_conditionInput {
  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionUpdateWithoutRule_conditionInput, {
    nullable: false
  })
  data!: App_script_conditionUpdateWithoutRule_conditionInput;
}
