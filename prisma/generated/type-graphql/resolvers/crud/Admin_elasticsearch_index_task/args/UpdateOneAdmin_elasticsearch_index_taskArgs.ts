import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskUpdateInput } from "../../../inputs/Admin_elasticsearch_index_taskUpdateInput";
import { Admin_elasticsearch_index_taskWhereUniqueInput } from "../../../inputs/Admin_elasticsearch_index_taskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAdmin_elasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskUpdateInput, {
    nullable: false
  })
  data!: Admin_elasticsearch_index_taskUpdateInput;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskWhereUniqueInput, {
    nullable: false
  })
  where!: Admin_elasticsearch_index_taskWhereUniqueInput;
}
