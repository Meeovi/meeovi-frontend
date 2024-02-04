import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutProduct_categoryInput } from "../inputs/CategoryCreateNestedOneWithoutProduct_categoryInput";

@TypeGraphQL.InputType("Product_categoryCreateWithoutProductInput", {})
export class Product_categoryCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProduct_categoryInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutProduct_categoryInput;
}
