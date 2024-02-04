import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_categoryNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_categoryNestedInput";

@TypeGraphQL.InputType("Product_categoryUpdateWithoutCategoryInput", {})
export class Product_categoryUpdateWithoutCategoryInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_categoryNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_categoryNestedInput | undefined;
}
