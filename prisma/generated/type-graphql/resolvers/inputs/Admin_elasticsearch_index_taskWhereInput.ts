import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskWhereInput", {})
export class Admin_elasticsearch_index_taskWhereInput {
  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  AND?: Admin_elasticsearch_index_taskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  OR?: Admin_elasticsearch_index_taskWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskWhereInput], {
    nullable: true
  })
  NOT?: Admin_elasticsearch_index_taskWhereInput[] | undefined;

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
