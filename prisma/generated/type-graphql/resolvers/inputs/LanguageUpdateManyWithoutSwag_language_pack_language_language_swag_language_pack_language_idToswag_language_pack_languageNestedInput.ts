import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope } from "../inputs/LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope";
import { LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput } from "../inputs/LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateManyWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput", {})
export class LanguageUpdateManyWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageNestedInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  upsert?: LanguageUpsertWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManySwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  set?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  delete?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  update?: LanguageUpdateWithWhereUniqueWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput], {
    nullable: true
  })
  updateMany?: LanguageUpdateManyWithWhereWithoutSwag_language_pack_language_language_swag_language_pack_language_idToswag_language_pack_languageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LanguageScalarWhereInput[] | undefined;
}
