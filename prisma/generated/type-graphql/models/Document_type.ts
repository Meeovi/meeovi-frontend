import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Document } from "../models/Document";
import { Document_base_config } from "../models/Document_base_config";
import { Document_base_config_sales_channel } from "../models/Document_base_config_sales_channel";
import { Document_type_translation } from "../models/Document_type_translation";
import { Document_typeCount } from "../resolvers/outputs/Document_typeCount";

@TypeGraphQL.ObjectType("Document_type", {})
export class Document_type {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  document?: Document[];

  document_base_config?: Document_base_config[];

  document_base_config_sales_channel?: Document_base_config_sales_channel[];

  document_type_translation?: Document_type_translation[];

  @TypeGraphQL.Field(_type => Document_typeCount, {
    nullable: true
  })
  _count?: Document_typeCount | null;
}
