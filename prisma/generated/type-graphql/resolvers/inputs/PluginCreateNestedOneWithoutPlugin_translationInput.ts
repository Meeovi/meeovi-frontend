import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutPlugin_translationInput } from "../inputs/PluginCreateOrConnectWithoutPlugin_translationInput";
import { PluginCreateWithoutPlugin_translationInput } from "../inputs/PluginCreateWithoutPlugin_translationInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateNestedOneWithoutPlugin_translationInput", {})
export class PluginCreateNestedOneWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutPlugin_translationInput, {
    nullable: true
  })
  create?: PluginCreateWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutPlugin_translationInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;
}
