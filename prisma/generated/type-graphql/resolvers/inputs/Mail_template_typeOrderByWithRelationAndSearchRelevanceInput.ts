import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_templateOrderByRelationAggregateInput } from "../inputs/Mail_templateOrderByRelationAggregateInput";
import { Mail_template_typeOrderByRelevanceInput } from "../inputs/Mail_template_typeOrderByRelevanceInput";
import { Mail_template_type_translationOrderByRelationAggregateInput } from "../inputs/Mail_template_type_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_template_typeOrderByWithRelationAndSearchRelevanceInput", {})
export class Mail_template_typeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  technical_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  available_entities?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  template_data?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_templateOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template?: Mail_templateOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_type_translation?: Mail_template_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Mail_template_typeOrderByRelevanceInput | undefined;
}
