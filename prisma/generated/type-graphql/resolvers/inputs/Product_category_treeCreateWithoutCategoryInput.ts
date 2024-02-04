import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_category_treeInput } from "../inputs/ProductCreateNestedOneWithoutProduct_category_treeInput";

@TypeGraphQL.InputType("Product_category_treeCreateWithoutCategoryInput", {})
export class Product_category_treeCreateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_category_treeInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_category_treeInput;
}
