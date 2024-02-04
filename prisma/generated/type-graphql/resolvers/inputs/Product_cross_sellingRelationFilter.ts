import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingWhereInput } from "../inputs/Product_cross_sellingWhereInput";

@TypeGraphQL.InputType("Product_cross_sellingRelationFilter", {})
export class Product_cross_sellingRelationFilter {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  is?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  isNot?: Product_cross_sellingWhereInput | undefined;
}
