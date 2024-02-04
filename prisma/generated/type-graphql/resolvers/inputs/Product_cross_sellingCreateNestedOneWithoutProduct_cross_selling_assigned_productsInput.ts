import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput";
import { Product_cross_sellingCreateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/Product_cross_sellingCreateWithoutProduct_cross_selling_assigned_productsInput";
import { Product_cross_sellingWhereUniqueInput } from "../inputs/Product_cross_sellingWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput", {})
export class Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingCreateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  create?: Product_cross_sellingCreateWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: true
  })
  connectOrCreate?: Product_cross_sellingCreateOrConnectWithoutProduct_cross_selling_assigned_productsInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_cross_sellingWhereUniqueInput | undefined;
}
