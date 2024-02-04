import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Admin_elasticsearch_index_taskOrderByRelevanceInput } from "../inputs/Admin_elasticsearch_index_taskOrderByRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput", {})
export class Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  index?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  alias?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  entity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doc_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Admin_elasticsearch_index_taskOrderByRelevanceInput | undefined;
}
