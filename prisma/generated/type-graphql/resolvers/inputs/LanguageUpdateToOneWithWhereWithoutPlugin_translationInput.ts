import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutPlugin_translationInput } from "../inputs/LanguageUpdateWithoutPlugin_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutPlugin_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPlugin_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutPlugin_translationInput;
}
