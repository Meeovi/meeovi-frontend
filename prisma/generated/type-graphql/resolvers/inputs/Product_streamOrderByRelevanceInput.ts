import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamOrderByRelevanceFieldEnum } from "../../enums/Product_streamOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_streamOrderByRelevanceInput", {})
export class Product_streamOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_streamOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "api_filter"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
