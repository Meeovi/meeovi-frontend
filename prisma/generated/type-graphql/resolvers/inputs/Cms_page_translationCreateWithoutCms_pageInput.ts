import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutCms_page_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCms_page_translationInput";

@TypeGraphQL.InputType("Cms_page_translationCreateWithoutCms_pageInput", {})
export class Cms_page_translationCreateWithoutCms_pageInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCms_page_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCms_page_translationInput;
}
