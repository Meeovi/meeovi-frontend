import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutTheme_translationInput } from "../inputs/LanguageCreateOrConnectWithoutTheme_translationInput";
import { LanguageCreateWithoutTheme_translationInput } from "../inputs/LanguageCreateWithoutTheme_translationInput";
import { LanguageUpdateToOneWithWhereWithoutTheme_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutTheme_translationInput";
import { LanguageUpsertWithoutTheme_translationInput } from "../inputs/LanguageUpsertWithoutTheme_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutTheme_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutTheme_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutTheme_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutTheme_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutTheme_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutTheme_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutTheme_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutTheme_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutTheme_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutTheme_translationInput | undefined;
}
