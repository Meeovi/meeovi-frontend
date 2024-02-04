import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordWhereInput } from "../inputs/Product_search_keywordWhereInput";

@TypeGraphQL.InputType("Product_search_keywordListRelationFilter", {})
export class Product_search_keywordListRelationFilter {
  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  every?: Product_search_keywordWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  some?: Product_search_keywordWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_search_keywordWhereInput, {
    nullable: true
  })
  none?: Product_search_keywordWhereInput | undefined;
}
