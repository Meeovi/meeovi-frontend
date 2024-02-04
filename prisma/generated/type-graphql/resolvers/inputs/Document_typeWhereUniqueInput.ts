import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { DocumentListRelationFilter } from "../inputs/DocumentListRelationFilter";
import { Document_base_configListRelationFilter } from "../inputs/Document_base_configListRelationFilter";
import { Document_base_config_sales_channelListRelationFilter } from "../inputs/Document_base_config_sales_channelListRelationFilter";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";
import { Document_type_translationListRelationFilter } from "../inputs/Document_type_translationListRelationFilter";

@TypeGraphQL.InputType("Document_typeWhereUniqueInput", {})
export class Document_typeWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technical_name?: string | undefined;

  @TypeGraphQL.Field(_type => [Document_typeWhereInput], {
    nullable: true
  })
  AND?: Document_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_typeWhereInput], {
    nullable: true
  })
  OR?: Document_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_typeWhereInput], {
    nullable: true
  })
  NOT?: Document_typeWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DocumentListRelationFilter, {
    nullable: true
  })
  document?: DocumentListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_base_configListRelationFilter, {
    nullable: true
  })
  document_base_config?: Document_base_configListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelListRelationFilter, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationListRelationFilter, {
    nullable: true
  })
  document_type_translation?: Document_type_translationListRelationFilter | undefined;
}
