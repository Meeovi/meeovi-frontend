import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateNestedOneWithoutDocument_base_configInput } from "../inputs/Document_typeCreateNestedOneWithoutDocument_base_configInput";
import { MediaCreateNestedOneWithoutDocument_base_configInput } from "../inputs/MediaCreateNestedOneWithoutDocument_base_configInput";

@TypeGraphQL.InputType("Document_base_configCreateWithoutDocument_base_config_sales_channelInput", {})
export class Document_base_configCreateWithoutDocument_base_config_sales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename_prefix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  filename_suffix?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document_number?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  global?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => MediaCreateNestedOneWithoutDocument_base_configInput, {
    nullable: true
  })
  media?: MediaCreateNestedOneWithoutDocument_base_configInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeCreateNestedOneWithoutDocument_base_configInput, {
    nullable: false
  })
  document_type!: Document_typeCreateNestedOneWithoutDocument_base_configInput;
}
