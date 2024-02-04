import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceWhereInput } from "../inputs/Product_priceWhereInput";

@TypeGraphQL.InputType("Product_priceListRelationFilter", {})
export class Product_priceListRelationFilter {
  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  every?: Product_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  some?: Product_priceWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_priceWhereInput, {
    nullable: true
  })
  none?: Product_priceWhereInput | undefined;
}
