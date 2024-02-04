import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerOrderByRelevanceFieldEnum } from "../../enums/Product_manufacturerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_manufacturerOrderByRelevanceInput", {})
export class Product_manufacturerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_manufacturerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "link"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
