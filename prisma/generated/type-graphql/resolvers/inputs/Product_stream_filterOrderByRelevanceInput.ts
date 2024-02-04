import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_stream_filterOrderByRelevanceFieldEnum } from "../../enums/Product_stream_filterOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_filterOrderByRelevanceInput", {})
export class Product_stream_filterOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Product_stream_filterOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "field" | "operator" | "value" | "parameters" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
