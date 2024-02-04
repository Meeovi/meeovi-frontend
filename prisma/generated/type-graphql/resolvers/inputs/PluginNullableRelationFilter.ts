import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PluginWhereInput } from "../inputs/PluginWhereInput";

@TypeGraphQL.InputType("PluginNullableRelationFilter", {})
export class PluginNullableRelationFilter {
  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  is?: PluginWhereInput | undefined;

  @TypeGraphQL.Field(_type => PluginWhereInput, {
    nullable: true
  })
  isNot?: PluginWhereInput | undefined;
}
