import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { LanguageRelationFilter } from "../inputs/LanguageRelationFilter";
import { Newsletter_recipientWhereInput } from "../inputs/Newsletter_recipientWhereInput";
import { Newsletter_recipient_tagListRelationFilter } from "../inputs/Newsletter_recipient_tagListRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { SalutationNullableRelationFilter } from "../inputs/SalutationNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Newsletter_recipientWhereUniqueInput", {})
export class Newsletter_recipientWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  hash?: string | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereInput], {
    nullable: true
  })
  AND?: Newsletter_recipientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereInput], {
    nullable: true
  })
  OR?: Newsletter_recipientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipientWhereInput], {
    nullable: true
  })
  NOT?: Newsletter_recipientWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  first_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  last_name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  zip_code?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  city?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  street?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  status?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  salutation_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  confirmed_at?: DateTimeNullableFilter | undefined;

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

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SalutationNullableRelationFilter, {
    nullable: true
  })
  salutation?: SalutationNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagListRelationFilter, {
    nullable: true
  })
  newsletter_recipient_tag?: Newsletter_recipient_tagListRelationFilter | undefined;
}
