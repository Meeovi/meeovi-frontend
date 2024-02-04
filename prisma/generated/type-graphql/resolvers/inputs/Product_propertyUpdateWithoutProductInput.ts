import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput } from "../inputs/Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput";

@TypeGraphQL.InputType("Product_propertyUpdateWithoutProductInput", {})
export class Product_propertyUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateOneRequiredWithoutProduct_propertyNestedInput | undefined;
}
