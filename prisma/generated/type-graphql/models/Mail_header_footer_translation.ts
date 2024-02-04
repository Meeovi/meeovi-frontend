import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Mail_header_footer } from "../models/Mail_header_footer";

@TypeGraphQL.ObjectType("Mail_header_footer_translation", {})
export class Mail_header_footer_translation {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  mail_header_footer_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_html?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_plain?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_html?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_plain?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  language?: Language;

  mail_header_footer?: Mail_header_footer;
}
