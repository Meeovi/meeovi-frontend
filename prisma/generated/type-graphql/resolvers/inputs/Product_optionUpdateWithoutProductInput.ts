import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput } from "../inputs/Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput";

@TypeGraphQL.InputType("Product_optionUpdateWithoutProductInput", {})
export class Product_optionUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput, {
    nullable: true
  })
  property_group_option?: Property_group_optionUpdateOneRequiredWithoutProduct_optionNestedInput | undefined;
}
