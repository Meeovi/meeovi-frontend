import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";

@TypeGraphQL.InputType("LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope", {})
export class LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope {
  @TypeGraphQL.Field(_type => [LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: false
  })
  data!: LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
