import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput";
import { ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput";

@TypeGraphQL.InputType("Product_category_treeUpdateInput", {})
export class Product_category_treeUpdateInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_category_treeNestedInput | undefined;
}
