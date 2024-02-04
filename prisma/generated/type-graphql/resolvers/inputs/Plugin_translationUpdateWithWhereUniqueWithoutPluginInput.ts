import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationUpdateWithoutPluginInput } from "../inputs/Plugin_translationUpdateWithoutPluginInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationUpdateWithWhereUniqueWithoutPluginInput", {})
export class Plugin_translationUpdateWithWhereUniqueWithoutPluginInput {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateWithoutPluginInput, {
    nullable: false
  })
  data!: Plugin_translationUpdateWithoutPluginInput;
}
