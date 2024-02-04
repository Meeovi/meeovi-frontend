import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Mail_header_footer_translationListRelationFilter } from "../inputs/Mail_header_footer_translationListRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";

@TypeGraphQL.InputType("Mail_header_footerWhereInput", {})
export class Mail_header_footerWhereInput {
  @TypeGraphQL.Field(_type => [Mail_header_footerWhereInput], {
    nullable: true
  })
  AND?: Mail_header_footerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerWhereInput], {
    nullable: true
  })
  OR?: Mail_header_footerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_header_footerWhereInput], {
    nullable: true
  })
  NOT?: Mail_header_footerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

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

  @TypeGraphQL.Field(_type => Mail_header_footer_translationListRelationFilter, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;
}
