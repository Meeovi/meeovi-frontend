import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput", {})
export class LanguageUpdateToOneWithWhereWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput;
}
