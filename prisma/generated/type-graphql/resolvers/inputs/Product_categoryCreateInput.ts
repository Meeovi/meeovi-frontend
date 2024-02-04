import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateNestedOneWithoutProduct_categoryInput } from "../inputs/CategoryCreateNestedOneWithoutProduct_categoryInput";
import { ProductCreateNestedOneWithoutProduct_categoryInput } from "../inputs/ProductCreateNestedOneWithoutProduct_categoryInput";

@TypeGraphQL.InputType("Product_categoryCreateInput", {})
export class Product_categoryCreateInput {
  @TypeGraphQL.Field(_type => CategoryCreateNestedOneWithoutProduct_categoryInput, {
    nullable: false
  })
  category!: CategoryCreateNestedOneWithoutProduct_categoryInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_categoryInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_categoryInput;
}
