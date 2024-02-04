import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetOrderByRelationAggregateInput } from "../inputs/App_administration_snippetOrderByRelationAggregateInput";
import { LanguageOrderByRelationAggregateInput } from "../inputs/LanguageOrderByRelationAggregateInput";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { LocaleOrderByRelevanceInput } from "../inputs/LocaleOrderByRelevanceInput";
import { Locale_translationOrderByRelationAggregateInput } from "../inputs/Locale_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByRelationAggregateInput } from "../inputs/UserOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocaleOrderByWithRelationAndSearchRelevanceInput", {})
export class LocaleOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetOrderByRelationAggregateInput, {
    nullable: true
  })
  app_administration_snippet?: App_administration_snippetOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByRelationAggregateInput, {
    nullable: true
  })
  language_language_locale_idTolocale?: LanguageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language_language_translation_code_idTolocale?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  locale_translation?: Locale_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByRelationAggregateInput, {
    nullable: true
  })
  user?: UserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocaleOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: LocaleOrderByRelevanceInput | undefined;
}
