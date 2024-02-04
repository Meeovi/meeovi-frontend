import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_flow_action_translationCreateManyLanguageInputEnvelope } from "../inputs/App_flow_action_translationCreateManyLanguageInputEnvelope";
import { App_flow_action_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateOrConnectWithoutLanguageInput";
import { App_flow_action_translationCreateWithoutLanguageInput } from "../inputs/App_flow_action_translationCreateWithoutLanguageInput";
import { App_flow_action_translationWhereUniqueInput } from "../inputs/App_flow_action_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_flow_action_translationCreateNestedManyWithoutLanguageInput", {})
export class App_flow_action_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_flow_action_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_flow_action_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_flow_action_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_flow_action_translationWhereUniqueInput[] | undefined;
}
