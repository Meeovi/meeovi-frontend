import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateWithoutLanguageInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateOrConnectWithoutLanguageInput", {})
export class App_script_condition_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereUniqueInput, {
    nullable: false
  })
  where!: App_script_condition_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: App_script_condition_translationCreateWithoutLanguageInput;
}
