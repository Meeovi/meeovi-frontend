import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutLocale_translationInput } from "../inputs/LanguageCreateWithoutLocale_translationInput";
import { LanguageUpdateWithoutLocale_translationInput } from "../inputs/LanguageUpdateWithoutLocale_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutLocale_translationInput", {})
export class LanguageUpsertWithoutLocale_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutLocale_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutLocale_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutLocale_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
