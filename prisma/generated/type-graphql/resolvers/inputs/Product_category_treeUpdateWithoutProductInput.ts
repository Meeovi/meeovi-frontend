import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput";

@TypeGraphQL.InputType("Product_category_treeUpdateWithoutProductInput", {})
export class Product_category_treeUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput | undefined;
}
