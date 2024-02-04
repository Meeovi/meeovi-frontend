import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Language } from "../models/Language";
import { Newsletter_recipient_tag } from "../models/Newsletter_recipient_tag";
import { Sales_channel } from "../models/Sales_channel";
import { Salutation } from "../models/Salutation";
import { Newsletter_recipientCount } from "../resolvers/outputs/Newsletter_recipientCount";

@TypeGraphQL.ObjectType("Newsletter_recipient", {})
export class Newsletter_recipient {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  first_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  last_name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  zip_code?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  city?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  street?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  hash!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  salutation_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  language_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  confirmed_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  language?: Language;

  sales_channel?: Sales_channel;

  salutation?: Salutation | null;

  newsletter_recipient_tag?: Newsletter_recipient_tag[];

  @TypeGraphQL.Field(_type => Newsletter_recipientCount, {
    nullable: true
  })
  _count?: Newsletter_recipientCount | null;
}
