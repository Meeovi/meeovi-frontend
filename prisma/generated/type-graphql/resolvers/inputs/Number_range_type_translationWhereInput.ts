import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Number_range_typeRelationFilter } from "../inputs/Number_range_typeRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Number_range_type_translationWhereInput", {})
export class Number_range_type_translationWhereInput {
  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereInput], {
    nullable: true
  })
  AND?: Number_range_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereInput], {
    nullable: true
  })
  OR?: Number_range_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereInput], {
    nullable: true
  })
  NOT?: Number_range_type_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  number_range_type_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  type_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeRelationFilter, {
    nullable: true
  })
  number_range_type?: Number_range_typeRelationFilter | undefined;
}
