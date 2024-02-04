import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateWithoutCustom_entityInput } from "../inputs/PluginCreateWithoutCustom_entityInput";
import { PluginUpdateWithoutCustom_entityInput } from "../inputs/PluginUpdateWithoutCustom_entityInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpsertWithoutCustom_entityInput", {})
export class PluginUpsertWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => PluginUpdateWithoutCustom_entityInput, {
    nullable: false
  })
  update!: PluginUpdateWithoutCustom_entityInput;

  @TypeGraphQL.Field(_type => PluginCreateWithoutCustom_entityInput, {
    nullable: false
  })
  create!: PluginCreateWithoutCustom_entityInput;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;
}
