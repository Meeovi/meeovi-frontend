import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_propertyInput } from "../inputs/ProductCreateNestedOneWithoutProduct_propertyInput";

@TypeGraphQL.InputType("Product_propertyCreateWithoutProperty_group_optionInput", {})
export class Product_propertyCreateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_propertyInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_propertyInput;
}
