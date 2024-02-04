import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope } from "../inputs/LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope";
import { LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput";
import { LanguageCreateWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_locale_idTolocaleInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput", {})
export class LanguageCreateNestedManyWithoutLocale_language_locale_idTolocaleInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput[] | undefined;
}
