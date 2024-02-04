import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_tagInput } from "../inputs/ProductCreateNestedOneWithoutProduct_tagInput";

@TypeGraphQL.InputType("Product_tagCreateWithoutTagInput", {})
export class Product_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_tagInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_tagInput;
}
