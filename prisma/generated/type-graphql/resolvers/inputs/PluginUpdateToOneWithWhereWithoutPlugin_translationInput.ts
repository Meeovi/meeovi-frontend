import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginUpdateWithoutPlugin_translationInput } from "../inputs/PluginUpdateWithoutPlugin_translationInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpdateToOneWithWhereWithoutPlugin_translationInput", {})
export class PluginUpdateToOneWithWhereWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateWithoutPlugin_translationInput, {
    nullable: false
  })
  data!: PluginUpdateWithoutPlugin_translationInput;
}
