import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Payment_methodRelationFilter } from "../inputs/Payment_methodRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Payment_method_translationWhereInput", {})
export class Payment_method_translationWhereInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationWhereInput], {
    nullable: true
  })
  AND?: Payment_method_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereInput], {
    nullable: true
  })
  OR?: Payment_method_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereInput], {
    nullable: true
  })
  NOT?: Payment_method_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  payment_method_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  distinguishable_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Payment_methodRelationFilter, {
    nullable: true
  })
  payment_method?: Payment_methodRelationFilter | undefined;
}
