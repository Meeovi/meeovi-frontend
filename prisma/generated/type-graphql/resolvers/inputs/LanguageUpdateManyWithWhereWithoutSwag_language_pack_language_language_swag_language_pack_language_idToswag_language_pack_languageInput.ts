import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyMutationInput } from "../inputs/LanguageUpdateManyMutationInput";

@TypeGraphQL.InputType("LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput", {})
export class LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput {
  @TypeGraphQL.Field(_type => LanguageScalarWhereInput, {
    nullable: false
  })
  where!: LanguageScalarWhereInput;

  @TypeGraphQL.Field(_type => LanguageUpdateManyMutationInput, {
    nullable: false
  })
  data!: LanguageUpdateManyMutationInput;
}
