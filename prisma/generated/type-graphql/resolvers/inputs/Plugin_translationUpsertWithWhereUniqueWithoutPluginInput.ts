import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateWithoutPluginInput } from "../inputs/Plugin_translationCreateWithoutPluginInput";
import { Plugin_translationUpdateWithoutPluginInput } from "../inputs/Plugin_translationUpdateWithoutPluginInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationUpsertWithWhereUniqueWithoutPluginInput", {})
export class Plugin_translationUpsertWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateWithoutPluginInput, {
    nullable: false
  })
  update!: Plugin_translationUpdateWithoutPluginInput;

  @TypeGraphQL.Field(_type => Plugin_translationCreateWithoutPluginInput, {
    nullable: false
  })
  create!: Plugin_translationCreateWithoutPluginInput;
}
