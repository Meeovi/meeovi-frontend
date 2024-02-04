import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateWithoutRule_conditionInput } from "../inputs/App_script_conditionCreateWithoutRule_conditionInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionCreateOrConnectWithoutRule_conditionInput", {})
export class App_script_conditionCreateOrConnectWithoutRule_conditionInput {
  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_conditionWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_conditionCreateWithoutRule_conditionInput, {
    nullable: false
  })
  create!: App_script_conditionCreateWithoutRule_conditionInput;
}
