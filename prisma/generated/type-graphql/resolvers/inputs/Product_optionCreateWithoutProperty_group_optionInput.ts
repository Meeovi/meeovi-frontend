import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_optionInput } from "../inputs/ProductCreateNestedOneWithoutProduct_optionInput";

@TypeGraphQL.InputType("Product_optionCreateWithoutProperty_group_optionInput", {})
export class Product_optionCreateWithoutProperty_group_optionInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_optionInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_optionInput;
}
