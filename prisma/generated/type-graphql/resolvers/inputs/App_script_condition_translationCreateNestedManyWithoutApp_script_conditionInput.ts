import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyApp_script_conditionInputEnvelope } from "../inputs/App_script_condition_translationCreateManyApp_script_conditionInputEnvelope";
import { App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput";
import { App_script_condition_translationCreateWithoutApp_script_conditionInput } from "../inputs/App_script_condition_translationCreateWithoutApp_script_conditionInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput", {})
export class App_script_condition_translationCreateNestedManyWithoutApp_script_conditionInput {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateWithoutApp_script_conditionInput], {
    nullable: true
  })
  create?: App_script_condition_translationCreateWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput], {
    nullable: true
  })
  connectOrCreate?: App_script_condition_translationCreateOrConnectWithoutApp_script_conditionInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateManyApp_script_conditionInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_condition_translationCreateManyApp_script_conditionInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_script_condition_translationWhereUniqueInput[] | undefined;
}
