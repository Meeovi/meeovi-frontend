import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Theme } from "../models/Theme";

@TypeGraphQL.ObjectType("Theme_child", {})
export class Theme_child {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  parent_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  child_id!: Buffer;

  theme_theme_child_child_idTotheme?: Theme;

  theme_theme_child_parent_idTotheme?: Theme;
}
