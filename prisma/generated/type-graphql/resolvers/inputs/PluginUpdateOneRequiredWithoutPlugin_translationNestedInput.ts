import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutPlugin_translationInput } from "../inputs/PluginCreateOrConnectWithoutPlugin_translationInput";
import { PluginCreateWithoutPlugin_translationInput } from "../inputs/PluginCreateWithoutPlugin_translationInput";
import { PluginUpdateToOneWithWhereWithoutPlugin_translationInput } from "../inputs/PluginUpdateToOneWithWhereWithoutPlugin_translationInput";
import { PluginUpsertWithoutPlugin_translationInput } from "../inputs/PluginUpsertWithoutPlugin_translationInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginUpdateOneRequiredWithoutPlugin_translationNestedInput", {})
export class PluginUpdateOneRequiredWithoutPlugin_translationNestedInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutPlugin_translationInput, {
    nullable: true
  })
  create?: PluginCreateWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutPlugin_translationInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpsertWithoutPlugin_translationInput, {
    nullable: true
  })
  upsert?: PluginUpsertWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateToOneWithWhereWithoutPlugin_translationInput, {
    nullable: true
  })
  update?: PluginUpdateToOneWithWhereWithoutPlugin_translationInput | undefined;
}
