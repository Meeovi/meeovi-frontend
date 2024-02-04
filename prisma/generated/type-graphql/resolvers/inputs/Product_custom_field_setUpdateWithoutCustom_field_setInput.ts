import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput";

@TypeGraphQL.InputType("Product_custom_field_setUpdateWithoutCustom_field_setInput", {})
export class Product_custom_field_setUpdateWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput | undefined;
}
