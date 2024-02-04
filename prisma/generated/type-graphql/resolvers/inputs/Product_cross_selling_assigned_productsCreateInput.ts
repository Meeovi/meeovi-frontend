import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput";
import { Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsCreateInput", {})
export class Product_cross_selling_assigned_productsCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  position?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  product_cross_selling!: Product_cross_sellingCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutProduct_cross_selling_assigned_productsInput;
}
