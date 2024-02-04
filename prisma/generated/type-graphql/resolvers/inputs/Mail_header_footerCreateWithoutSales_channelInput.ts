import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput";

@TypeGraphQL.InputType("Mail_header_footerCreateWithoutSales_channelInput", {})
export class Mail_header_footerCreateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  system_default?: boolean | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput, {
    nullable: true
  })
  mail_header_footer_translation?: Mail_header_footer_translationCreateNestedManyWithoutMail_header_footerInput | undefined;
}
