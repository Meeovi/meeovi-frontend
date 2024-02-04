import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_cross_selling_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_cross_selling_translationInput";
import { Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput } from "../inputs/Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput";

@TypeGraphQL.InputType("Product_cross_selling_translationCreateInput", {})
export class Product_cross_selling_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_cross_selling_translationInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput, {
    nullable: false
  })
  product_cross_selling!: Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_translationInput;
}
