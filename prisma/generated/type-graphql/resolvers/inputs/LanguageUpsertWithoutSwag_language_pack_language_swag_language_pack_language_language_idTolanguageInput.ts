import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput", {})
export class LanguageUpsertWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
