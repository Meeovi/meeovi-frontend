import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutMail_template_mediaInput } from "../inputs/LanguageUpdateWithoutMail_template_mediaInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput", {})
export class LanguageUpdateToOneWithWhereWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMail_template_mediaInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutMail_template_mediaInput;
}
