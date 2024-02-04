import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageOrderByWithRelationAndSearchRelevanceInput } from "../inputs/LanguageOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_typeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Mail_template_typeOrderByWithRelationAndSearchRelevanceInput";
import { Mail_template_type_translationOrderByRelevanceInput } from "../inputs/Mail_template_type_translationOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput", {})
export class Mail_template_type_translationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mail_template_type_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => LanguageOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  language?: LanguageOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  mail_template_type?: Mail_template_typeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Mail_template_type_translationOrderByRelevanceInput | undefined;
}
