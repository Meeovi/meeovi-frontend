import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Document_base_config } from "../models/Document_base_config";
import { Document_type } from "../models/Document_type";
import { Sales_channel } from "../models/Sales_channel";

@TypeGraphQL.ObjectType("Document_base_config_sales_channel", {})
export class Document_base_config_sales_channel {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  document_base_config_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  document_type_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  sales_channel_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  document_base_config?: Document_base_config;

  document_type?: Document_type;

  sales_channel?: Sales_channel | null;
}
