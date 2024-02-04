import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_propertyNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_propertyNestedInput";

@TypeGraphQL.InputType("Product_propertyUpdateWithoutProperty_group_optionInput", {})
export class Product_propertyUpdateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_propertyNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_propertyNestedInput | undefined;
}
