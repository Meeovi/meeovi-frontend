import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingWhereInput } from "../inputs/Product_sortingWhereInput";

@TypeGraphQL.InputType("Product_sortingRelationFilter", {})
export class Product_sortingRelationFilter {
  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  is?: Product_sortingWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_sortingWhereInput, {
    nullable: true
  })
  isNot?: Product_sortingWhereInput | undefined;
}
