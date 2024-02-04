import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_feature_set_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_feature_set_translationInput";
import { Product_feature_setCreateNestedOneWithoutProduct_feature_set_translationInput } from "../inputs/Product_feature_setCreateNestedOneWithoutProduct_feature_set_translationInput";

@TypeGraphQL.InputType("Product_feature_set_translationCreateInput", {})
export class Product_feature_set_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_feature_set_translationInput;

  @TypeGraphQL.Field(_type => Product_feature_setCreateNestedOneWithoutProduct_feature_set_translationInput, {
    nullable: false
  })
  product_feature_set!: Product_feature_setCreateNestedOneWithoutProduct_feature_set_translationInput;
}
