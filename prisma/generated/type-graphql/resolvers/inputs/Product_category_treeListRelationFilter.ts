import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_category_treeWhereInput } from "../inputs/Product_category_treeWhereInput";

@TypeGraphQL.InputType("Product_category_treeListRelationFilter", {})
export class Product_category_treeListRelationFilter {
  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  every?: Product_category_treeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  some?: Product_category_treeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_category_treeWhereInput, {
    nullable: true
  })
  none?: Product_category_treeWhereInput | undefined;
}
