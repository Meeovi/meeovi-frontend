import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginUpdateWithoutCustom_entityInput } from "../inputs/PluginUpdateWithoutCustom_entityInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginUpdateToOneWithWhereWithoutCustom_entityInput", {})
export class PluginUpdateToOneWithWhereWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  where?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateWithoutCustom_entityInput, {
    nullable: false
  })
  data!: PluginUpdateWithoutCustom_entityInput;
}
