import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_categoryInput } from "../inputs/ProductCreateNestedOneWithoutProduct_categoryInput";

@TypeGraphQL.InputType("Product_categoryCreateWithoutCategoryInput", {})
export class Product_categoryCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_categoryInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_categoryInput;
}
