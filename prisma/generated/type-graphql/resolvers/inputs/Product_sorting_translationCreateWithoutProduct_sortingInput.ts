import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_sorting_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_sorting_translationInput";

@TypeGraphQL.InputType("Product_sorting_translationCreateWithoutProduct_sortingInput", {})
export class Product_sorting_translationCreateWithoutProduct_sortingInput {
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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_sorting_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_sorting_translationInput;
}
