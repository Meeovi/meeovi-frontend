import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_configOrderByRelevanceFieldEnum } from "../../enums/Product_search_configOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_configOrderByRelevanceInput", {})
export class Product_search_configOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_search_configOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "excluded_terms"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
