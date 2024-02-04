import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput";
import { ProductUpdateOneRequiredWithoutProduct_categoryNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_categoryNestedInput";

@TypeGraphQL.InputType("Product_categoryUpdateInput", {})
export class Product_categoryUpdateInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_categoryNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_categoryNestedInput | undefined;
}
