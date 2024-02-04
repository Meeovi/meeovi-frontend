import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppOrderByWithRelationAndSearchRelevanceInput } from "../inputs/AppOrderByWithRelationAndSearchRelevanceInput";
import { App_administration_snippetOrderByRelevanceInput } from "../inputs/App_administration_snippetOrderByRelevanceInput";
import { LocaleOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LocaleOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_administration_snippetOrderByWithRelationAndSearchRelevanceInput", {})
export class App_administration_snippetOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locale_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AppOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  app?: AppOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => LocaleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  locale?: LocaleOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: App_administration_snippetOrderByRelevanceInput | undefined;
}
