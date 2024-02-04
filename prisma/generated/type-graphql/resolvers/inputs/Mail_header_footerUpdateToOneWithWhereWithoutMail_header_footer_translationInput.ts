import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footerUpdateWithoutMail_header_footer_translationInput } from "../inputs/Mail_header_footerUpdateWithoutMail_header_footer_translationInput";
import { Mail_header_footerWhereInput } from "../inputs/Mail_header_footerWhereInput";

@TypeGraphQL.InputType("Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput", {})
export class Mail_header_footerUpdateToOneWithWhereWithoutMail_header_footer_translationInput {
  @TypeGraphQL.Field(_type => Mail_header_footerWhereInput, {
    nullable: true
  })
  where?: Mail_header_footerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Mail_header_footerUpdateWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  data!: Mail_header_footerUpdateWithoutMail_header_footer_translationInput;
}
