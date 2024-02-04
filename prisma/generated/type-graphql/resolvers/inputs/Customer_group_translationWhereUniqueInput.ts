import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { Customer_groupRelationFilter } from "../inputs/Customer_groupRelationFilter";
import { Customer_group_translationWhereInput } from "../inputs/Customer_group_translationWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { customer_group_translationCustomer_group_idLanguage_idCompoundUniqueInput } from "../inputs/customer_group_translationCustomer_group_idLanguage_idCompoundUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationWhereUniqueInput", {})
export class Customer_group_translationWhereUniqueInput {
  @TypeGraphQL.Field(_type => customer_group_translationCustomer_group_idLanguage_idCompoundUniqueInput, {
    nullable: true
  })
  customer_group_id_language_id?: customer_group_translationCustomer_group_idLanguage_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereInput], {
    nullable: true
  })
  AND?: Customer_group_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereInput], {
    nullable: true
  })
  OR?: Customer_group_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereInput], {
    nullable: true
  })
  NOT?: Customer_group_translationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  customer_group_id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  registration_title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  registration_introduction?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolNullableFilter, {
    nullable: true
  })
  registration_only_company_registration?: BoolNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  registration_seo_meta_description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Customer_groupRelationFilter, {
    nullable: true
  })
  customer_group?: Customer_groupRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageRelationFilter, {
    nullable: true
  })
  language?: LanguageRelationFilter | undefined;
}
