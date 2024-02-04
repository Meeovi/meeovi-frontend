import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingScalarWhereInput } from "../inputs/Product_cross_sellingScalarWhereInput";
import { Product_cross_sellingUpdateManyMutationInput } from "../inputs/Product_cross_sellingUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_cross_sellingUpdateManyWithWhereWithoutProductInput", {})
export class Product_cross_sellingUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_cross_sellingScalarWhereInput, {
    nullable: false
  })
  where!: Product_cross_sellingScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_cross_sellingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_cross_sellingUpdateManyMutationInput;
}
