import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_timeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Delivery_timeOrderByWithRelationAndSearchRelevanceInput";
import { Delivery_time_translationOrderByRelevanceInput } from "../inputs/Delivery_time_translationOrderByRelevanceInput";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput", {})
export class Delivery_time_translationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  delivery_time_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_timeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  delivery_time?: Delivery_timeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Delivery_time_translationOrderByRelevanceInput | undefined;
}
