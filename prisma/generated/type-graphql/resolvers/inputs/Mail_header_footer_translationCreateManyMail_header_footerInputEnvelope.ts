import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyMail_header_footerInput } from "../inputs/Mail_header_footer_translationCreateManyMail_header_footerInput";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope", {})
export class Mail_header_footer_translationCreateManyMail_header_footerInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateManyMail_header_footerInput], {
    nullable: false
  })
  data!: Mail_header_footer_translationCreateManyMail_header_footerInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
