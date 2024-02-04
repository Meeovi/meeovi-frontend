import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryWhereInput } from "../inputs/Product_keyword_dictionaryWhereInput";

@TypeGraphQL.InputType("Product_keyword_dictionaryListRelationFilter", {})
export class Product_keyword_dictionaryListRelationFilter {
  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  every?: Product_keyword_dictionaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  some?: Product_keyword_dictionaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_keyword_dictionaryWhereInput, {
    nullable: true
  })
  none?: Product_keyword_dictionaryWhereInput | undefined;
}
