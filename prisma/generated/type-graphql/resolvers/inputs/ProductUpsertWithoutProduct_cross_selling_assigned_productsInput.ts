import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductCreateWithoutProduct_cross_selling_assigned_productsInput";
import { ProductUpdateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductUpdateWithoutProduct_cross_selling_assigned_productsInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpsertWithoutProduct_cross_selling_assigned_productsInput", {})
export class ProductUpsertWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutProduct_cross_selling_assigned_productsInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutProduct_cross_selling_assigned_productsInput;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;
}
