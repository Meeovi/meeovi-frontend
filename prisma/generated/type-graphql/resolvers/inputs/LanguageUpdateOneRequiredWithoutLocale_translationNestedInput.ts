import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutLocale_translationInput } from "../inputs/LanguageCreateOrConnectWithoutLocale_translationInput";
import { LanguageCreateWithoutLocale_translationInput } from "../inputs/LanguageCreateWithoutLocale_translationInput";
import { LanguageUpdateToOneWithWhereWithoutLocale_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutLocale_translationInput";
import { LanguageUpsertWithoutLocale_translationInput } from "../inputs/LanguageUpsertWithoutLocale_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutLocale_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutLocale_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutLocale_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutLocale_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutLocale_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutLocale_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutLocale_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutLocale_translationInput | undefined;
}
