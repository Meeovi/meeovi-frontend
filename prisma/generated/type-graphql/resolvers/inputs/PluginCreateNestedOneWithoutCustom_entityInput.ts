import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutCustom_entityInput } from "../inputs/PluginCreateOrConnectWithoutCustom_entityInput";
import { PluginCreateWithoutCustom_entityInput } from "../inputs/PluginCreateWithoutCustom_entityInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateNestedOneWithoutCustom_entityInput", {})
export class PluginCreateNestedOneWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutCustom_entityInput, {
    nullable: true
  })
  create?: PluginCreateWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutCustom_entityInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;
}
