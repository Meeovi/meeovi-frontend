import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutPlugin_translationInput } from "../inputs/PluginCreateWithoutPlugin_translationInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateOrConnectWithoutPlugin_translationInput", {})
export class PluginCreateOrConnectWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutPlugin_translationInput, {
    nullable: false
  })
  create!: PluginCreateWithoutPlugin_translationInput;
}
