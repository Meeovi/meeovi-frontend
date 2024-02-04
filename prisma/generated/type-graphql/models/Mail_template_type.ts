import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mail_template } from "../models/Mail_template";
import { Mail_template_type_translation } from "../models/Mail_template_type_translation";
import { Mail_template_typeCount } from "../resolvers/outputs/Mail_template_typeCount";

@TypeGraphQL.ObjectType("Mail_template_type", {})
export class Mail_template_type {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technical_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  available_entities?: string | null;

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
  template_data?: string | null;

  mail_template?: Mail_template[];

  mail_template_type_translation?: Mail_template_type_translation[];

  @TypeGraphQL.Field(_type => Mail_template_typeCount, {
    nullable: true
  })
  _count?: Mail_template_typeCount | null;
}
