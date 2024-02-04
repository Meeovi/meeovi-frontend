import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput } from "../inputs/Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput";
import { ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput";

@TypeGraphQL.InputType("Product_custom_field_setUpdateInput", {})
export class Product_custom_field_setUpdateInput {
  @TypeGraphQL.Field(_type => Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setUpdateOneRequiredWithoutProduct_custom_field_setNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_custom_field_setNestedInput | undefined;
}
