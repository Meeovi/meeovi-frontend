import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_field_setOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Custom_field_setOrderByWithRelationAndSearchRelevanceInput";
import { Custom_field_set_relationOrderByRelevanceInput } from "../inputs/Custom_field_set_relationOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput", {})
export class Custom_field_set_relationOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  set_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_setOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  custom_field_set?: Custom_field_setOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Custom_field_set_relationOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Custom_field_set_relationOrderByRelevanceInput | undefined;
}
