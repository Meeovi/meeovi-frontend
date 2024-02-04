import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductUpdateWithoutProduct_cross_selling_assigned_productsInput } from "../inputs/ProductUpdateWithoutProduct_cross_selling_assigned_productsInput";
import { ProductWhereInput } from "../inputs/ProductWhereInput";

@TypeGraphQL.InputType("ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput", {})
export class ProductUpdateToOneWithWhereWithoutProduct_cross_selling_assigned_productsInput {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutProduct_cross_selling_assigned_productsInput, {
    nullable: false
  })
  data!: ProductUpdateWithoutProduct_cross_selling_assigned_productsInput;
}
