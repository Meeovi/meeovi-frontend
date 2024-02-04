import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_conditionCreateOrConnectWithoutRule_conditionInput } from "../inputs/App_script_conditionCreateOrConnectWithoutRule_conditionInput";
import { App_script_conditionCreateWithoutRule_conditionInput } from "../inputs/App_script_conditionCreateWithoutRule_conditionInput";
import { App_script_conditionWhereUniqueInput } from "../inputs/App_script_conditionWhereUniqueInput";

@TypeGraphQL.InputType("App_script_conditionCreateNestedOneWithoutRule_conditionInput", {})
export class App_script_conditionCreateNestedOneWithoutRule_conditionInput {
  @TypeGraphQL.Field(_type => App_script_conditionCreateWithoutRule_conditionInput, {
    nullable: true
  })
  create?: App_script_conditionCreateWithoutRule_conditionInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionCreateOrConnectWithoutRule_conditionInput, {
    nullable: true
  })
  connectOrCreate?: App_script_conditionCreateOrConnectWithoutRule_conditionInput | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: true
  })
  connect?: App_script_conditionWhereUniqueInput | undefined;
}
