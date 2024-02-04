import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Mail_template_mediaListRelationFilter } from "../inputs/Mail_template_mediaListRelationFilter";
import { Mail_template_translationListRelationFilter } from "../inputs/Mail_template_translationListRelationFilter";
import { Mail_template_typeNullableRelationFilter } from "../inputs/Mail_template_typeNullableRelationFilter";

@TypeGraphQL.InputType("Mail_templateWhereInput", {})
export class Mail_templateWhereInput {
  @TypeGraphQL.Field(_type => [Mail_templateWhereInput], {
    nullable: true
  })
  AND?: Mail_templateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereInput], {
    nullable: true
  })
  OR?: Mail_templateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_templateWhereInput], {
    nullable: true
  })
  NOT?: Mail_templateWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  mail_template_type_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  system_default?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeNullableRelationFilter, {
    nullable: true
  })
  mail_template_type?: Mail_template_typeNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaListRelationFilter, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationListRelationFilter, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationListRelationFilter | undefined;
}
