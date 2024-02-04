import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput } from "../inputs/Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateWithoutLanguageInput", {})
export class Product_sorting_translationCreateWithoutLanguageInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  label?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  product_sorting!: Product_sortingCreateNestedOneWithoutProduct_sorting_translationInput;
}
