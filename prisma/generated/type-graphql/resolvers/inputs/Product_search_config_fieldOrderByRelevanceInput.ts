import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_search_config_fieldOrderByRelevanceFieldEnum } from "../../enums/Product_search_config_fieldOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_search_config_fieldOrderByRelevanceInput", {})
export class Product_search_config_fieldOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_search_config_fieldOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "field"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
