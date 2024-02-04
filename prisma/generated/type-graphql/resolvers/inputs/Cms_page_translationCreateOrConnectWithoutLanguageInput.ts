import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateWithoutLanguageInput } from "../inputs/Cms_page_translationCreateWithoutLanguageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationCreateOrConnectWithoutLanguageInput", {})
export class Cms_page_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Cms_page_translationCreateWithoutLanguageInput;
}
