import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Import_export_fileWhereInput } from "../inputs/Import_export_fileWhereInput";
import { Import_export_logListRelationFilter } from "../inputs/Import_export_logListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Import_export_fileWhereUniqueInput", {})
export class Import_export_fileWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileWhereInput], {
    nullable: true
  })
  AND?: Import_export_fileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileWhereInput], {
    nullable: true
  })
  OR?: Import_export_fileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileWhereInput], {
    nullable: true
  })
  NOT?: Import_export_fileWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  original_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  path?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expire_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  size?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  access_token?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Import_export_logListRelationFilter, {
    nullable: true
  })
  import_export_log?: Import_export_logListRelationFilter | undefined;
}
