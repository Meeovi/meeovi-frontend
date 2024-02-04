import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Elasticsearch_index_taskWhereInput", {})
export class Elasticsearch_index_taskWhereInput {
  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  AND?: Elasticsearch_index_taskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  OR?: Elasticsearch_index_taskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  NOT?: Elasticsearch_index_taskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  index?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  alias?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  entity?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  doc_count?: IntFilter | undefined;
}
