import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_country_roundingOrderByRelevanceFieldEnum } from "../../enums/Currency_country_roundingOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_country_roundingOrderByRelevanceInput", {})
export class Currency_country_roundingOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Currency_country_roundingOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"item_rounding" | "total_rounding">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
