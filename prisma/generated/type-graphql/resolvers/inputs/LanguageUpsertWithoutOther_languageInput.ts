import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutOther_languageInput } from "../inputs/LanguageCreateWithoutOther_languageInput";
import { LanguageUpdateWithoutOther_languageInput } from "../inputs/LanguageUpdateWithoutOther_languageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutOther_languageInput", {})
export class LanguageUpsertWithoutOther_languageInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutOther_languageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutOther_languageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutOther_languageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutOther_languageInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
