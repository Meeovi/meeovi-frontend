import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMail_template_translationInput } from "../inputs/LanguageCreateWithoutMail_template_translationInput";
import { LanguageUpdateWithoutMail_template_translationInput } from "../inputs/LanguageUpdateWithoutMail_template_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutMail_template_translationInput", {})
export class LanguageUpsertWithoutMail_template_translationInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMail_template_translationInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutMail_template_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_translationInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMail_template_translationInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
