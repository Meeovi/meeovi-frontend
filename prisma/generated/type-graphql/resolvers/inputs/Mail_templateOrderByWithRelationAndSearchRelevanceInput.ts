import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaOrderByRelationAggregateInput } from "../inputs/Mail_template_mediaOrderByRelationAggregateInput";
import { Mail_template_translationOrderByRelationAggregateInput } from "../inputs/Mail_template_translationOrderByRelationAggregateInput";
import { Mail_template_typeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Mail_template_typeOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Mail_templateOrderByWithRelationAndSearchRelevanceInput", {})
export class Mail_templateOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  mail_template_type_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  system_default?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_typeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  mail_template_type?: Mail_template_typeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_media?: Mail_template_mediaOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Mail_template_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  mail_template_translation?: Mail_template_translationOrderByRelationAggregateInput | undefined;
}
