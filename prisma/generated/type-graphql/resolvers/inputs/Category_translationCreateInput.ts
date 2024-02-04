import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutCategory_translationInput } from "../inputs/CategoryCreateNestedOneWithoutCategory_translationInput";
import { LanguageCreateNestedOneWithoutCategory_translationInput } from "../inputs/LanguageCreateNestedOneWithoutCategory_translationInput";

@TypeGraphQL.InputType("Category_translationCreateInput", {})
export class Category_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  breadcrumb?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  internal_link?: Buffer | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  link_new_tab?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  link_type?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_link?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

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

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  slot_config?: string | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutCategory_translationInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutCategory_translationInput;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutCategory_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutCategory_translationInput;
}
