import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationUpdateWithoutLanguageInput } from "../inputs/Cms_page_translationUpdateWithoutLanguageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Cms_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Cms_page_translationUpdateWithoutLanguageInput;
}
