import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";
import { Cms_page_translationListRelationFilter } from "../inputs/Cms_page_translationListRelationFilter";
import { Cms_sectionListRelationFilter } from "../inputs/Cms_sectionListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Landing_pageListRelationFilter } from "../inputs/Landing_pageListRelationFilter";
import { MediaNullableRelationFilter } from "../inputs/MediaNullableRelationFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { Sales_channelListRelationFilter } from "../inputs/Sales_channelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { cms_pageIdVersion_idCompoundUniqueInput } from "../inputs/cms_pageIdVersion_idCompoundUniqueInput";

@TypeGraphQL.InputType("Cms_pageWhereUniqueInput", {})
export class Cms_pageWhereUniqueInput {
  @TypeGraphQL.Field(_type => cms_pageIdVersion_idCompoundUniqueInput, {
    nullable: true
  })
  id_version_id?: cms_pageIdVersion_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereInput], {
    nullable: true
  })
  AND?: Cms_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereInput], {
    nullable: true
  })
  OR?: Cms_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereInput], {
    nullable: true
  })
  NOT?: Cms_pageWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  entity?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  preview_media_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  css_class?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  config?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CategoryListRelationFilter, {
    nullable: true
  })
  category?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaNullableRelationFilter, {
    nullable: true
  })
  media?: MediaNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationListRelationFilter, {
    nullable: true
  })
  cms_page_translation?: Cms_page_translationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionListRelationFilter, {
    nullable: true
  })
  cms_section?: Cms_sectionListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_pageListRelationFilter, {
    nullable: true
  })
  landing_page?: Landing_pageListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  product?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelListRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelListRelationFilter | undefined;
}
