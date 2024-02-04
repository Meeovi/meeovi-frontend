import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMail_header_footer_translationInput";
import { LanguageCreateWithoutMail_header_footer_translationInput } from "../inputs/LanguageCreateWithoutMail_header_footer_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutMail_header_footer_translationInput", {})
export class LanguageCreateNestedOneWithoutMail_header_footer_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_header_footer_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_header_footer_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
