import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput", {})
export class LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput;
}
