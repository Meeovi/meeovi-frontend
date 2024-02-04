import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_keyword_dictionaryOrderByRelevanceFieldEnum } from "../../enums/Product_keyword_dictionaryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_keyword_dictionaryOrderByRelevanceInput", {})
export class Product_keyword_dictionaryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_keyword_dictionaryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"keyword" | "reversed">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
