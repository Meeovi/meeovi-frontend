import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput", {})
export class LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput;
}
