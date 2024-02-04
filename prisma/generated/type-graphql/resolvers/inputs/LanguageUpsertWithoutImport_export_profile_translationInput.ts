import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutImport_export_profile_translationInput } from "../inputs/LanguageCreateWithoutImport_export_profile_translationInput";
import { LanguageUpdateWithoutImport_export_profile_translationInput } from "../inputs/LanguageUpdateWithoutImport_export_profile_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutImport_export_profile_translationInput", {})
export class LanguageUpsertWithoutImport_export_profile_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutImport_export_profile_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutImport_export_profile_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutImport_export_profile_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
