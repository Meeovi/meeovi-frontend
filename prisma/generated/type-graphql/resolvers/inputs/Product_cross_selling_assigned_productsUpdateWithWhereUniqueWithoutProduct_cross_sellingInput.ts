import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsUpdateWithoutProduct_cross_sellingInput } from "../inputs/Product_cross_selling_assigned_productsUpdateWithoutProduct_cross_sellingInput";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProduct_cross_sellingInput", {})
export class Product_cross_selling_assigned_productsUpdateWithWhereUniqueWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_assigned_productsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsUpdateWithoutProduct_cross_sellingInput, {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsUpdateWithoutProduct_cross_sellingInput;
}
