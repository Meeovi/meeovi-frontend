import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationScalarWhereInput } from "../inputs/Cms_page_translationScalarWhereInput";
import { Cms_page_translationUpdateManyMutationInput } from "../inputs/Cms_page_translationUpdateManyMutationInput";

@TypeGraphQL.InputType("Cms_page_translationUpdateManyWithWhereWithoutLanguageInput", {})
export class Cms_page_translationUpdateManyWithWhereWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Cms_page_translationScalarWhereInput, {
    nullable: false
  })
  where!: Cms_page_translationScalarWhereInput;

  @TypeGraphQL.Field(_type => Cms_page_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Cms_page_translationUpdateManyMutationInput;
}
