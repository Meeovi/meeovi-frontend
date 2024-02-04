import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput } from "../inputs/LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput";
import { LocaleWhereUniqueInput } from "../inputs/LocaleWhereUniqueInput";

@TypeGraphQL.InputType("LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput", {})
export class LocaleCreateOrConnectWithoutLanguage_language_translation_code_idTolocaleInput {
  @TypeGraphQL.Field(_type => LocaleWhereUniqueInput, {
    nullable: false
  })
  where!: LocaleWhereUniqueInput;

  @TypeGraphQL.Field(_type => LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput, {
    nullable: false
  })
  create!: LocaleCreateWithoutLanguage_language_translation_code_idTolocaleInput;
}
