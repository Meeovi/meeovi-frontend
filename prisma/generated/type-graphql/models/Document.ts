import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Document_type } from "../models/Document_type";
import { Media } from "../models/Media";
import { Order } from "../models/Order";
import { DocumentCount } from "../resolvers/outputs/DocumentCount";

@TypeGraphQL.ObjectType("Document", {})
export class Document {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  document_type_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  referenced_document_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  file_type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  sent!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  static!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  deep_link_code!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  document_media_file_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  document_number?: string | null;

  media?: Media | null;

  document_type?: Document_type;

  order?: Order;

  document?: Document | null;

  other_document?: Document[];

  @TypeGraphQL.Field(_type => DocumentCount, {
    nullable: true
  })
  _count?: DocumentCount | null;
}
