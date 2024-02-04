import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mail_template_media } from "../models/Mail_template_media";
import { Mail_template_translation } from "../models/Mail_template_translation";
import { Mail_template_type } from "../models/Mail_template_type";
import { Mail_templateCount } from "../resolvers/outputs/Mail_templateCount";

@TypeGraphQL.ObjectType("Mail_template", {})
export class Mail_template {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  mail_template_type_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  system_default!: boolean;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  mail_template_type?: Mail_template_type | null;

  mail_template_media?: Mail_template_media[];

  mail_template_translation?: Mail_template_translation[];

  @TypeGraphQL.Field(_type => Mail_templateCount, {
    nullable: true
  })
  _count?: Mail_templateCount | null;
}
