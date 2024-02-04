import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutMail_template_mediaInput } from "../inputs/LanguageCreateWithoutMail_template_mediaInput";
import { LanguageUpdateWithoutMail_template_mediaInput } from "../inputs/LanguageUpdateWithoutMail_template_mediaInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutMail_template_mediaInput", {})
export class LanguageUpsertWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMail_template_mediaInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_mediaInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutMail_template_mediaInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
