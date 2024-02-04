import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope } from "../inputs/LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope";
import { LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedManyWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput", {})
export class LanguageCreateNestedManyWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput[] | undefined;
}
