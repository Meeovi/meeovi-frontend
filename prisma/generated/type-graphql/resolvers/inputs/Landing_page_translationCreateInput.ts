import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateNestedOneWithoutLanding_page_translationInput } from "../inputs/Landing_pageCreateNestedOneWithoutLanding_page_translationInput";
import { LanguageCreateNestedOneWithoutLanding_page_translationInput } from "../inputs/LanguageCreateNestedOneWithoutLanding_page_translationInput";

@TypeGraphQL.InputType("Landing_page_translationCreateInput", {})
export class Landing_page_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keywords?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slot_config?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Landing_pageCreateNestedOneWithoutLanding_page_translationInput, {
    nullable: false
  })
  landing_page!: Landing_pageCreateNestedOneWithoutLanding_page_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutLanding_page_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutLanding_page_translationInput;
}
