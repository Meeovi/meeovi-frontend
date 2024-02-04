import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMail_template_mediaInput } from "../inputs/LanguageCreateOrConnectWithoutMail_template_mediaInput";
import { LanguageCreateWithoutMail_template_mediaInput } from "../inputs/LanguageCreateWithoutMail_template_mediaInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutMail_template_mediaInput", {})
export class LanguageCreateNestedOneWithoutMail_template_mediaInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMail_template_mediaInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMail_template_mediaInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMail_template_mediaInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
