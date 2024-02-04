import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateWithoutLanguageInput } from "../inputs/Plugin_translationCreateWithoutLanguageInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationCreateOrConnectWithoutLanguageInput", {})
export class Plugin_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Plugin_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Plugin_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Plugin_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Plugin_translationCreateWithoutLanguageInput;
}
