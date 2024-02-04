import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationUpdateWithoutLanguageInput } from "../inputs/Plugin_translationUpdateWithoutLanguageInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Plugin_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Plugin_translationUpdateWithoutLanguageInput;
}
