import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Import_export_logListRelationFilter } from "../inputs/Import_export_logListRelationFilter";
import { Import_export_profileWhereInput } from "../inputs/Import_export_profileWhereInput";
import { Import_export_profile_translationListRelationFilter } from "../inputs/Import_export_profile_translationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Import_export_profileWhereUniqueInput", {})
export class Import_export_profileWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileWhereInput], {
    nullable: true
  })
  AND?: Import_export_profileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileWhereInput], {
    nullable: true
  })
  OR?: Import_export_profileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileWhereInput], {
    nullable: true
  })
  NOT?: Import_export_profileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  system_default?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  source_entity?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  file_type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  delimiter?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  enclosure?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  mapping?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  update_by?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_logListRelationFilter, {
    nullable: true
  })
  import_export_log?: Import_export_logListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationListRelationFilter, {
    nullable: true
  })
  import_export_profile_translation?: Import_export_profile_translationListRelationFilter | undefined;
}
