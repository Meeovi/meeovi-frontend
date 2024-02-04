import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope } from "../inputs/LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope";
import { LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput";
import { LanguageCreateWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageCreateWithoutLocale_language_locale_idTolocaleInput";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput";
import { LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput";
import { LanguageUpsertWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput } from "../inputs/LanguageUpsertWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput", {})
export class LanguageUpdateManyWithoutLocale_language_locale_idTolocaleNestedInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpsertWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  upsert?: LanguageUpsertWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManyLocale_language_locale_idTolocaleInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  update?: LanguageUpdateWithWhereUniqueWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput], {
    nullable: true
  })
  updateMany?: LanguageUpdateManyWithWhereWithoutLocale_language_locale_idTolocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LanguageScalarWhereInput[] | undefined;
}
