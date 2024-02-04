import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateManyLocale_language_locale_idTolocaleInput";

@TypeGraphQL.InputType("LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope", {})
export class LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope {
  @TypeGraphQL.Field(_type => [LanguageCreateManyLocale_language_locale_idTolocaleInput], {
    nullable: false
  })
  data!: LanguageCreateManyLocale_language_locale_idTolocaleInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
