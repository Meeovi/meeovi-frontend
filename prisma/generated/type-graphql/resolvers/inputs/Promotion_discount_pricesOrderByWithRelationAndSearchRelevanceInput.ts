import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from "../inputs/CurrencyOrderByWithRelationAndSearchRelevanceInput";
import { Promotion_discountOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Promotion_discountOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput", {})
export class Promotion_discount_pricesOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discount_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Promotion_discountOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  promotion_discount?: Promotion_discountOrderByWithRelationAndSearchRelevanceInput | undefined;
}
