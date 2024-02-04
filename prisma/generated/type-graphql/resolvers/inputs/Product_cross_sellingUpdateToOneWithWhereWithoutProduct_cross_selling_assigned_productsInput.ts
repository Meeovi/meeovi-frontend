import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput";
import { Product_cross_sellingWhereInput } from "../inputs/Product_cross_sellingWhereInput";

@TypeGraphQL.InputType("Product_cross_sellingUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput", {})
export class Product_cross_sellingUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  where?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  data!: Product_cross_sellingUpdateWithoutProduct_cross_selling_assigned_productsInput;
}
