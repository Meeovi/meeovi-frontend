import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageUpdateWithoutMail_template_translationInput } from "../inputs/LanguageUpdateWithoutMail_template_translationInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpdateToOneWithWhereWithoutMail_template_translationInput", {})
export class LanguageUpdateToOneWithWhereWithoutMail_template_translationInput {
  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;

  @TypeGraphQL.Field(_type => LanguageUpdateWithoutMail_template_translationInput, {
    nullable: false
  })
  data!: LanguageUpdateWithoutMail_template_translationInput;
}
