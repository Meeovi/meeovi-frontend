import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_cross_sellingOrderByRelevanceFieldEnum } from "../../enums/Product_cross_sellingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_cross_sellingOrderByRelevanceInput", {})
export class Product_cross_sellingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_cross_sellingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "sort_by" | "sort_direction">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
