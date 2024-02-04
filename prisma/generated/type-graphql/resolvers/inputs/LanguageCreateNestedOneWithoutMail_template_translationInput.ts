import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_template_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMail_template_translationInput";
import { LanguageCreateWithoutMail_template_translationInput } from "../inputs/LanguageCreateWithoutMail_template_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutMail_template_translationInput", {})
export class LanguageCreateNestedOneWithoutMail_template_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_template_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_template_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_template_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
