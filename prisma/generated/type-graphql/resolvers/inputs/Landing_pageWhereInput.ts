import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { Cms_pageNullableRelationFilter } from "../inputs/Cms_pageNullableRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Landing_page_sales_channelListRelationFilter } from "../inputs/Landing_page_sales_channelListRelationFilter";
import { Landing_page_tagListRelationFilter } from "../inputs/Landing_page_tagListRelationFilter";
import { Landing_page_translationListRelationFilter } from "../inputs/Landing_page_translationListRelationFilter";

@TypeGraphQL.InputType("Landing_pageWhereInput", {})
export class Landing_pageWhereInput {
  @TypeGraphQL.Field(_type => [Landing_pageWhereInput], {
    nullable: true
  })
  AND?: Landing_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereInput], {
    nullable: true
  })
  OR?: Landing_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageWhereInput], {
    nullable: true
  })
  NOT?: Landing_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  active?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  cms_page_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_page_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_pageNullableRelationFilter, {
    nullable: true
  })
  cms_page?: Cms_pageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelListRelationFilter, {
    nullable: true
  })
  landing_page_sales_channel?: Landing_page_sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagListRelationFilter, {
    nullable: true
  })
  landing_page_tag?: Landing_page_tagListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationListRelationFilter, {
    nullable: true
  })
  landing_page_translation?: Landing_page_translationListRelationFilter | undefined;
}
