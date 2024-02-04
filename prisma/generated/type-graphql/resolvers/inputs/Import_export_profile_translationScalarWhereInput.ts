import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Import_export_profile_translationScalarWhereInput", {})
export class Import_export_profile_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarWhereInput], {
    nullable: true
  })
  AND?: Import_export_profile_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarWhereInput], {
    nullable: true
  })
  OR?: Import_export_profile_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: Import_export_profile_translationScalarWhereInput[] | undefined;

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
}
