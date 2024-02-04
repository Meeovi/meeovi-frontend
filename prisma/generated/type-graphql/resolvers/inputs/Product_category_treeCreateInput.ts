import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutProduct_category_treeInput } from "../inputs/CategoryCreateNestedOneWithoutProduct_category_treeInput";
import { ProductCreateNestedOneWithoutProduct_category_treeInput } from "../inputs/ProductCreateNestedOneWithoutProduct_category_treeInput";

@TypeGraphQL.InputType("Product_category_treeCreateInput", {})
export class Product_category_treeCreateInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProduct_category_treeInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutProduct_category_treeInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_category_treeInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_category_treeInput;
}
