import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_selling_assigned_productsWhereInput } from "../inputs/Product_cross_selling_assigned_productsWhereInput";

@TypeGraphQL.InputType("Product_cross_selling_assigned_productsListRelationFilter", {})
export class Product_cross_selling_assigned_productsListRelationFilter {
  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  every?: Product_cross_selling_assigned_productsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  some?: Product_cross_selling_assigned_productsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_selling_assigned_productsWhereInput, {
    nullable: true
  })
  none?: Product_cross_selling_assigned_productsWhereInput | undefined;
}
