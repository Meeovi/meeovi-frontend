import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_header_footer_translationCreateManyLanguageInput } from "../inputs/Mail_header_footer_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Mail_header_footer_translationCreateManyLanguageInputEnvelope", {})
export class Mail_header_footer_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_header_footer_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Mail_header_footer_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
