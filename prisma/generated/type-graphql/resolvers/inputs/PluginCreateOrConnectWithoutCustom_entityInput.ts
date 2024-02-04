import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutCustom_entityInput } from "../inputs/PluginCreateWithoutCustom_entityInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginCreateOrConnectWithoutCustom_entityInput", {})
export class PluginCreateOrConnectWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: false
  })
  where!: PluginWhereUniqueInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutCustom_entityInput, {
    nullable: false
  })
  create!: PluginCreateWithoutCustom_entityInput;
}
