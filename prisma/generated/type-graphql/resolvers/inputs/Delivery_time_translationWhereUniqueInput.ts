import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Delivery_timeRelationFilter } from "../inputs/Delivery_timeRelationFilter";
import { Delivery_time_translationWhereInput } from "../inputs/Delivery_time_translationWhereInput";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { delivery_time_translationDelivery_time_idLanguage_idCompoundUniqueInput } from "../inputs/delivery_time_translationDelivery_time_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationWhereUniqueInput", {})
export class Delivery_time_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => delivery_time_translationDelivery_time_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  delivery_time_id_language_id?: delivery_time_translationDelivery_time_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereInput], {
    nullable: true
  })
  AND?: Delivery_time_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereInput], {
    nullable: true
  })
  OR?: Delivery_time_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereInput], {
    nullable: true
  })
  NOT?: Delivery_time_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  delivery_time_id?: BytesFilter | undefined;

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
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeRelationFilter, {
    nullable: true
  })
  delivery_time?: Delivery_timeRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
