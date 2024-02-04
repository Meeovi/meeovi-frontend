import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_propertyNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_propertyNestedInput";
import { Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput } from "../inputs/Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput";

@TypeGraphQL.InputType("Product_propertyUpdateInput", {})
export class Product_propertyUpdateInput {
  @TypeGraphQL.Field(_type => Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_propertyNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_propertyNestedInput | undefined;
}
