import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_sorting_translationOrderByRelevanceFieldEnum } from "../../enums/Product_sorting_translationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_sorting_translationOrderByRelevanceInput", {})
export class Product_sorting_translationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_sorting_translationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "label"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
