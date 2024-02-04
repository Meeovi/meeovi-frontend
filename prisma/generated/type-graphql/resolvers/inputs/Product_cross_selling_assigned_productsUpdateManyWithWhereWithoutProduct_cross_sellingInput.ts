import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsScalarWhereInput } from "../inputs/Product_cross_selling_assigned_productsScalarWhereInput";
import { Product_cross_selling_assigned_productsUpdateManyMutationInput } from "../inputs/Product_cross_selling_assigned_productsUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProduct_cross_sellingInput", {})
export class Product_cross_selling_assigned_productsUpdateManyWithWhereWithoutProduct_cross_sellingInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsScalarWhereInput, {
    nullable: false
  })
  where!: Product_cross_selling_assigned_productsScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_selling_assigned_productsUpdateManyMutationInput;
}
