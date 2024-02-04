import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateNestedOneWithoutCms_page_translationInput } from "../inputs/Cms_pageCreateNestedOneWithoutCms_page_translationInput";

@TypeGraphQL.InputType("Cms_page_translationCreateWithoutLanguageInput", {})
export class Cms_page_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateNestedOneWithoutCms_page_translationInput, {
    nullable: false
  })
  cms_page!: Cms_pageCreateNestedOneWithoutCms_page_translationInput;
}
