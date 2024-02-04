import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { Payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { Payment_method_translationOrderByRelevanceInput } from "../inputs/Payment_method_translationOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Payment_method_translationOrderByWithRelationAndSearchRelevanceInput", {})
export class Payment_method_translationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  payment_method_id?: "asc" | "desc" | undefined;

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
  distinguishable_name?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  payment_method?: Payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Payment_method_translationOrderByRelevanceInput | undefined;
}
