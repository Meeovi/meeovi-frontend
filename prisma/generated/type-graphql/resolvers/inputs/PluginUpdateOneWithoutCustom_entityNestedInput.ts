import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginCreateOrConnectWithoutCustom_entityInput } from "../inputs/PluginCreateOrConnectWithoutCustom_entityInput";
import { PluginCreateWithoutCustom_entityInput } from "../inputs/PluginCreateWithoutCustom_entityInput";
import { PluginUpdateToOneWithWhereWithoutCustom_entityInput } from "../inputs/PluginUpdateToOneWithWhereWithoutCustom_entityInput";
import { PluginUpsertWithoutCustom_entityInput } from "../inputs/PluginUpsertWithoutCustom_entityInput";
import { PluginWhereInput } from "../inputs/PluginWhereInput";
import { PluginWhereUniqueInput } from "../inputs/PluginWhereUniqueInput";

@TypeGraphQL.InputType("PluginUpdateOneWithoutCustom_entityNestedInput", {})
export class PluginUpdateOneWithoutCustom_entityNestedInput {
  @TypeGraphQL.Field(_type => PluginCreateWithoutCustom_entityInput, {
    nullable: true
  })
  create?: PluginCreateWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginCreateOrConnectWithoutCustom_entityInput, {
    nullable: true
  })
  connectOrCreate?: PluginCreateOrConnectWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpsertWithoutCustom_entityInput, {
    nullable: true
  })
  upsert?: PluginUpsertWithoutCustom_entityInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  disconnect?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  delete?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereUniqueInput, {
    nullable: true
  })
  connect?: PluginWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PluginUpdateToOneWithWhereWithoutCustom_entityInput, {
    nullable: true
  })
  update?: PluginUpdateToOneWithWhereWithoutCustom_entityInput | undefined;
}
