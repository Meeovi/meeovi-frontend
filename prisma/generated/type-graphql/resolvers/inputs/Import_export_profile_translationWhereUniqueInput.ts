import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Import_export_profileRelationFilter } from "../inputs/Import_export_profileRelationFilter";
import { Import_export_profile_translationWhereInput } from "../inputs/Import_export_profile_translationWhereInput";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { import_export_profile_translationImport_export_profile_idLanguage_idCompoundUniqueInput } from "../inputs/import_export_profile_translationImport_export_profile_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationWhereUniqueInput", {})
export class Import_export_profile_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => import_export_profile_translationImport_export_profile_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  import_export_profile_id_language_id?: import_export_profile_translationImport_export_profile_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereInput], {
    nullable: true
  })
  AND?: Import_export_profile_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereInput], {
    nullable: true
  })
  OR?: Import_export_profile_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereInput], {
    nullable: true
  })
  NOT?: Import_export_profile_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  import_export_profile_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileRelationFilter, {
    nullable: true
  })
  import_export_profile?: Import_export_profileRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
