import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_priceOrderByRelevanceFieldEnum } from "../../enums/Product_priceOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_priceOrderByRelevanceInput", {})
export class Product_priceOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_priceOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"price" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
