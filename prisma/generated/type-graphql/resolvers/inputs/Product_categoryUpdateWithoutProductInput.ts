import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput } from "../inputs/CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput";

@TypeGraphQL.InputType("Product_categoryUpdateWithoutProductInput", {})
export class Product_categoryUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput, {
    nullable: true
  })
  category?: CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput | undefined;
}
