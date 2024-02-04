import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateManyMail_header_footerInput", {})
export class Mail_header_footer_translationCreateManyMail_header_footerInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_html?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  header_plain?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_html?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  footer_plain?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
