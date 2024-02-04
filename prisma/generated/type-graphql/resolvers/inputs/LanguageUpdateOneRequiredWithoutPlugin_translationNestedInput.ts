import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutPlugin_translationInput } from "../inputs/LanguageCreateOrConnectWithoutPlugin_translationInput";
import { LanguageCreateWithoutPlugin_translationInput } from "../inputs/LanguageCreateWithoutPlugin_translationInput";
import { LanguageUpdateToOneWithWhereWithoutPlugin_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutPlugin_translationInput";
import { LanguageUpsertWithoutPlugin_translationInput } from "../inputs/LanguageUpsertWithoutPlugin_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutPlugin_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutPlugin_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutPlugin_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutPlugin_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutPlugin_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutPlugin_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutPlugin_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutPlugin_translationInput | undefined;
}
