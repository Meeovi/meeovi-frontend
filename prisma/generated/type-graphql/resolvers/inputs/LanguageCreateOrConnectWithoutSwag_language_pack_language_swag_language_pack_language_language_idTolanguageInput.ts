import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput", {})
export class LanguageCreateOrConnectWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSwag_language_pack_language_swag_language_pack_language_language_idTolanguageInput;
}
