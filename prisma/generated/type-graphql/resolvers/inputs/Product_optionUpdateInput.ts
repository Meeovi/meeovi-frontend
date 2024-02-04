import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_optionNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_optionNestedInput";
import { Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput } from "../inputs/Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput";

@TypeGraphQL.InputType("Product_optionUpdateInput", {})
export class Product_optionUpdateInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_optionNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_optionNestedInput | undefined;

  @TypeGraphQL.Field(_type => Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput | undefined;
}
