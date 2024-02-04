import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sortingOrderByRelevanceFieldEnum } from "../../enums/Product_sortingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_sortingOrderByRelevanceInput", {})
export class Product_sortingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_sortingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"url_key" | "fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
