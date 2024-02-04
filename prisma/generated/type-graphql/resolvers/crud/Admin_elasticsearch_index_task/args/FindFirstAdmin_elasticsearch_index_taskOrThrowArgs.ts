import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput";
import { Admin_elasticsearch_index_taskWhereInput } from "../../../inputs/Admin_elasticsearch_index_taskWhereInput";
import { Admin_elasticsearch_index_taskWhereUniqueInput } from "../../../inputs/Admin_elasticsearch_index_taskWhereUniqueInput";
import { Admin_elasticsearch_index_taskScalarFieldEnum } from "../../../../enums/Admin_elasticsearch_index_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAdmin_elasticsearch_index_taskOrThrowArgs {
  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Admin_elasticsearch_index_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Admin_elasticsearch_index_taskOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskWhereUniqueInput, {
    nullable: true
  })
  cursor?: Admin_elasticsearch_index_taskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "index" | "alias" | "entity" | "doc_count"> | undefined;
}
