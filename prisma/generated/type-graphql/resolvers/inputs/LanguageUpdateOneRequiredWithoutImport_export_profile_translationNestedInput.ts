import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateOrConnectWithoutImport_export_profile_translationInput";
import { LanguageCreateWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateWithoutImport_export_profile_translationInput";
import { LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput } from "../inputs/LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput";
import { LanguageUpsertWithoutImport_export_profile_translationInput } from "../inputs/LanguageUpsertWithoutImport_export_profile_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput", {})
export class LanguageUpdateOneRequiredWithoutImport_export_profile_translationNestedInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpsertWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  upsert?: LanguageUpsertWithoutImport_export_profile_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput, {
    nullable: true
  })
  update?: LanguageUpdateToOneWithWhereWithoutImport_export_profile_translationInput | undefined;
}
