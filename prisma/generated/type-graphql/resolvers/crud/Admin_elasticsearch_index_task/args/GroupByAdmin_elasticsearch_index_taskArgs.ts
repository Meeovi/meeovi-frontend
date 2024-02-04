import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskOrderByWithAggregationInput } from "../../../inputs/Admin_elasticsearch_index_taskOrderByWithAggregationInput";
import { Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput } from "../../../inputs/Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput";
import { Admin_elasticsearch_index_taskWhereInput } from "../../../inputs/Admin_elasticsearch_index_taskWhereInput";
import { Admin_elasticsearch_index_taskScalarFieldEnum } from "../../../../enums/Admin_elasticsearch_index_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdmin_elasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Admin_elasticsearch_index_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Admin_elasticsearch_index_taskOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "index" | "alias" | "entity" | "doc_count">;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Admin_elasticsearch_index_taskScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
