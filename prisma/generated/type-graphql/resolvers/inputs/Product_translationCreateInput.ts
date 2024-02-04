import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_translationInput";
import { ProductCreateNestedOneWithoutProduct_translationInput } from "../inputs/ProductCreateNestedOneWithoutProduct_translationInput";

@TypeGraphQL.InputType("Product_translationCreateInput", {})
export class Product_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  meta_description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  keywords?: string | undefined;

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
  pack_unit?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pack_unit_plural?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_search_keywords?: string | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_translationInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_translationInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_translationInput;
}
