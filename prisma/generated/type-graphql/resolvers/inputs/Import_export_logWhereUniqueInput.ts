import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Import_export_fileNullableRelationFilter } from "../inputs/Import_export_fileNullableRelationFilter";
import { Import_export_logListRelationFilter } from "../inputs/Import_export_logListRelationFilter";
import { Import_export_logNullableRelationFilter } from "../inputs/Import_export_logNullableRelationFilter";
import { Import_export_logWhereInput } from "../inputs/Import_export_logWhereInput";
import { Import_export_profileNullableRelationFilter } from "../inputs/Import_export_profileNullableRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";

@TypeGraphQL.InputType("Import_export_logWhereUniqueInput", {})
export class Import_export_logWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereInput], {
    nullable: true
  })
  AND?: Import_export_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereInput], {
    nullable: true
  })
  OR?: Import_export_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logWhereInput], {
    nullable: true
  })
  NOT?: Import_export_logWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  activity?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  state?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  records?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  profile_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  user_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  profile_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  file_id?: BytesNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  result?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  invalid_records_log_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_fileNullableRelationFilter, {
    nullable: true
  })
  import_export_file?: Import_export_fileNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_logNullableRelationFilter, {
    nullable: true
  })
  import_export_log?: Import_export_logNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_logListRelationFilter, {
    nullable: true
  })
  other_import_export_log?: Import_export_logListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileNullableRelationFilter, {
    nullable: true
  })
  import_export_profile?: Import_export_profileNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => UserNullableRelationFilter, {
    nullable: true
  })
  user?: UserNullableRelationFilter | undefined;
}
