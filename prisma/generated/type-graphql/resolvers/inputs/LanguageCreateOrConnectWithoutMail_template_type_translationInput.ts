import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMail_template_type_translationInput } from "../inputs/LanguageCreateWithoutMail_template_type_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutMail_template_type_translationInput", {})
export class LanguageCreateOrConnectWithoutMail_template_type_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_type_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMail_template_type_translationInput;
}
