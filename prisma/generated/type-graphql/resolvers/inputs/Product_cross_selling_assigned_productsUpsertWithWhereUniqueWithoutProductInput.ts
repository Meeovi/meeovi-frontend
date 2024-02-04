import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsCreateWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsCreateWithoutProductInput";
import { Product_cross_selling_assigned_productsUpdateWithoutProductInput } from "../inputs/Product_cross_selling_assigned_productsUpdateWithoutProductInput";
import { Product_cross_selling_assigned_productsWhereUniqueInput } from "../inputs/Product_cross_selling_assigned_productsWhereUniqueInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput", {})
export class Product_cross_selling_assigned_productsUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereUniqueInput, {
    nullable: false
  })
  where!: Product_cross_selling_assigned_productsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsUpdateWithoutProductInput, {
    nullable: false
  })
  update!: Product_cross_selling_assigned_productsUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsCreateWithoutProductInput, {
    nullable: false
  })
  create!: Product_cross_selling_assigned_productsCreateWithoutProductInput;
}
