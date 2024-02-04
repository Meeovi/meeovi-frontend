import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateWithoutMail_header_footer_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutMail_header_footer_translationInput", {})
export class LanguageCreateOrConnectWithoutMail_header_footer_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMail_header_footer_translationInput;
}
