import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CountryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CountryOrderByWithRelationAndSearchRelevanceInput";
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CurrencyOrderByWithRelationAndSearchRelevanceInput";
import { Currency_country_roundingOrderByRelevanceInput } from "../inputs/Currency_country_roundingOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput", {})
export class Currency_country_roundingOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  country_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  item_rounding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  total_rounding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CurrencyOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  currency?: CurrencyOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => CountryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  country?: CountryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Currency_country_roundingOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Currency_country_roundingOrderByRelevanceInput | undefined;
}
