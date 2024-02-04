import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutPlugin_translationInput } from "../inputs/PluginCreateWithoutPlugin_translationInput";
import { PluginUpdateWithoutPlugin_translationInput } from "../inputs/PluginUpdateWithoutPlugin_translationInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpsertWithoutPlugin_translationInput", {})
export class PluginUpsertWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => PluginUpdateWithoutPlugin_translationInput, {
    nullable: false
  })
  update!: PluginUpdateWithoutPlugin_translationInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutPlugin_translationInput, {
    nullable: false
  })
  create!: PluginCreateWithoutPlugin_translationInput;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
