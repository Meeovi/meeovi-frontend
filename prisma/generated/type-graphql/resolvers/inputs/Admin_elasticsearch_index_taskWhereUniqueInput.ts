import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Admin_elasticsearch_index_taskWhereInput } from "../inputs/Admin_elasticsearch_index_taskWhereInput";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("Admin_elasticsearch_index_taskWhereUniqueInput", {})
export class Admin_elasticsearch_index_taskWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

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
