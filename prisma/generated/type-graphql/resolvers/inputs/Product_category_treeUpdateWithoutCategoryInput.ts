import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput";

@TypeGraphQL.InputType("Product_category_treeUpdateWithoutCategoryInput", {})
export class Product_category_treeUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput | undefined;
}
