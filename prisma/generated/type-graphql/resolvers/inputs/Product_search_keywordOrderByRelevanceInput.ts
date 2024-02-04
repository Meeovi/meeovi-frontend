import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_keywordOrderByRelevanceFieldEnum } from "../../enums/Product_search_keywordOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_keywordOrderByRelevanceInput", {})
export class Product_search_keywordOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_search_keywordOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "keyword"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
