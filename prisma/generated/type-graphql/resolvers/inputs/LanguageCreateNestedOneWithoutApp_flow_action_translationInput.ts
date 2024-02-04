import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_flow_action_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_flow_action_translationInput";
import { LanguageCreateWithoutApp_flow_action_translationInput } from "../inputs/LanguageCreateWithoutApp_flow_action_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutApp_flow_action_translationInput", {})
export class LanguageCreateNestedOneWithoutApp_flow_action_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_flow_action_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_flow_action_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_flow_action_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
