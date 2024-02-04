import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput", {})
export class Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  index?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  alias?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  entity?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  doc_count?: IntWithAggregatesFilter | undefined;
}
