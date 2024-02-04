import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("App_cms_block_translationScalarWhereInput", {})
export class App_cms_block_translationScalarWhereInput {
  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarWhereInput], {
    nullable: true
  })
  AND?: App_cms_block_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarWhereInput], {
    nullable: true
  })
  OR?: App_cms_block_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_cms_block_translationScalarWhereInput], {
    nullable: true
  })
  NOT?: App_cms_block_translationScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  label?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  app_cms_block_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  language_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;
}
