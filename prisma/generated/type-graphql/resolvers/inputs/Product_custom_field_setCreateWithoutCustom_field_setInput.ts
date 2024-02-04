import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_custom_field_setInput } from "../inputs/ProductCreateNestedOneWithoutProduct_custom_field_setInput";

@TypeGraphQL.InputType("Product_custom_field_setCreateWithoutCustom_field_setInput", {})
export class Product_custom_field_setCreateWithoutCustom_field_setInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_custom_field_setInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_custom_field_setInput;
}
