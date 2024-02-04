import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateNestedOneWithoutProduct_manufacturer_translationInput } from "../inputs/LanguageCreateNestedOneWithoutProduct_manufacturer_translationInput";
import { Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput } from "../inputs/Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput";

@TypeGraphQL.InputType("Product_manufacturer_translationCreateInput", {})
export class Product_manufacturer_translationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

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

  @TypeGraphQL.Field(_type => LanguageCreateNestedOneWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  language!: LanguageCreateNestedOneWithoutProduct_manufacturer_translationInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput, {
    nullable: false
  })
  product_manufacturer!: Product_manufacturerCreateNestedOneWithoutProduct_manufacturer_translationInput;
}
