import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutPlugin_translationInput } from "../inputs/LanguageCreateWithoutPlugin_translationInput";
import { LanguageUpdateWithoutPlugin_translationInput } from "../inputs/LanguageUpdateWithoutPlugin_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutPlugin_translationInput", {})
export class LanguageUpsertWithoutPlugin_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutPlugin_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutPlugin_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutPlugin_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutPlugin_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
