import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_script_condition_translationCreateManyLanguageInputEnvelope } from "../inputs/App_script_condition_translationCreateManyLanguageInputEnvelope";
import { App_script_condition_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateOrConnectWithoutLanguageInput";
import { App_script_condition_translationCreateWithoutLanguageInput } from "../inputs/App_script_condition_translationCreateWithoutLanguageInput";
import { App_script_condition_translationWhereUniqueInput } from "../inputs/App_script_condition_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_script_condition_translationCreateNestedManyWithoutLanguageInput", {})
export class App_script_condition_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_script_condition_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_script_condition_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_script_condition_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_script_condition_translationWhereUniqueInput[] | undefined;
}
