import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppRelationFilter } from "../inputs/AppRelationFilter";
import { App_cms_blockWhereInput } from "../inputs/App_cms_blockWhereInput";
import { App_cms_block_translationListRelationFilter } from "../inputs/App_cms_block_translationListRelationFilter";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("App_cms_blockWhereUniqueInput", {})
export class App_cms_blockWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereInput], {
    nullable: true
  })
  AND?: App_cms_blockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereInput], {
    nullable: true
  })
  OR?: App_cms_blockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_blockWhereInput], {
    nullable: true
  })
  NOT?: App_cms_blockWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  block?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  template?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  styles?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AppRelationFilter, {
    nullable: true
  })
  app?: AppRelationFilter | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationListRelationFilter, {
    nullable: true
  })
  app_cms_block_translation?: App_cms_block_translationListRelationFilter | undefined;
}
