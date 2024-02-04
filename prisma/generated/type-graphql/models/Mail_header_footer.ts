import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Mail_header_footer_translation } from "../models/Mail_header_footer_translation";
import { Sales_channel } from "../models/Sales_channel";
import { Mail_header_footerCount } from "../resolvers/outputs/Mail_header_footerCount";

@TypeGraphQL.ObjectType("Mail_header_footer", {})
export class Mail_header_footer {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

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

  mail_header_footer_translation?: Mail_header_footer_translation[];

  sales_channel?: Sales_channel[];

  @TypeGraphQL.Field(_type => Mail_header_footerCount, {
    nullable: true
  })
  _count?: Mail_header_footerCount | null;
}
