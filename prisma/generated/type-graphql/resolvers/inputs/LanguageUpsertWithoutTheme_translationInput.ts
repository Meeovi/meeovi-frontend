import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutTheme_translationInput } from "../inputs/LanguageCreateWithoutTheme_translationInput";
import { LanguageUpdateWithoutTheme_translationInput } from "../inputs/LanguageUpdateWithoutTheme_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutTheme_translationInput", {})
export class LanguageUpsertWithoutTheme_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutTheme_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutTheme_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutTheme_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutTheme_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
