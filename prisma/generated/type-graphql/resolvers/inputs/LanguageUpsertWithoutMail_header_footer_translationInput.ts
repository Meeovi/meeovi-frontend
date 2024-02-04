import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateWithoutMail_header_footer_translationInput";
import { LanguageUpdateWithoutMail_header_footer_translationInput } from "../inputs/LanguageUpdateWithoutMail_header_footer_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutMail_header_footer_translationInput", {})
export class LanguageUpsertWithoutMail_header_footer_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutMail_header_footer_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_header_footer_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMail_header_footer_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
