import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingWhereInput } from "../inputs/Product_cross_sellingWhereInput";

@TypeGraphQL.InputType("Product_cross_sellingListRelationFilter", {})
export class Product_cross_sellingListRelationFilter {
  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  every?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  some?: Product_cross_sellingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingWhereInput, {
    nullable: true
  })
  none?: Product_cross_sellingWhereInput | undefined;
}
