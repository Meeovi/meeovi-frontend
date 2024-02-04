import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyOrderByRelevanceFieldEnum } from "../../enums/CurrencyOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CurrencyOrderByRelevanceInput", {})
export class CurrencyOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CurrencyOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"iso_code" | "symbol" | "item_rounding" | "total_rounding">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
