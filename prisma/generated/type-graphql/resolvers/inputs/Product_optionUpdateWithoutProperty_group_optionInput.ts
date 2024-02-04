import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateOneRequiredWithoutProduct_optionNestedInput } from "../inputs/ProductUpdateOneRequiredWithoutProduct_optionNestedInput";

@TypeGraphQL.InputType("Product_optionUpdateWithoutProperty_group_optionInput", {})
export class Product_optionUpdateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => ProductUpdateOneRequiredWithoutProduct_optionNestedInput, {
    nullable: true
  })
  product?: ProductUpdateOneRequiredWithoutProduct_optionNestedInput | undefined;
}
