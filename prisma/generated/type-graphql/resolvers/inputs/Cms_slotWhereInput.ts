import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { Cms_blockRelationFilter } from "../inputs/Cms_blockRelationFilter";
import { Cms_slot_translationListRelationFilter } from "../inputs/Cms_slot_translationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Cms_slotWhereInput", {})
export class Cms_slotWhereInput {
  @TypeGraphQL.Field(_type => [Cms_slotWhereInput], {
    nullable: true
  })
  AND?: Cms_slotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereInput], {
    nullable: true
  })
  OR?: Cms_slotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slotWhereInput], {
    nullable: true
  })
  NOT?: Cms_slotWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_block_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  cms_block_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  slot?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  locked?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_blockRelationFilter, {
    nullable: true
  })
  cms_block?: Cms_blockRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationListRelationFilter, {
    nullable: true
  })
  cms_slot_translation?: Cms_slot_translationListRelationFilter | undefined;
}
