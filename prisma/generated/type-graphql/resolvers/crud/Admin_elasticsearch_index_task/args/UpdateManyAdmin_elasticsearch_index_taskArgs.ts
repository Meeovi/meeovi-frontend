import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskUpdateManyMutationInput } from "../../../inputs/Admin_elasticsearch_index_taskUpdateManyMutationInput";
import { Admin_elasticsearch_index_taskWhereInput } from "../../../inputs/Admin_elasticsearch_index_taskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAdmin_elasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskUpdateManyMutationInput, {
    nullable: false
  })
  data!: Admin_elasticsearch_index_taskUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskWhereInput, {
    nullable: true
  })
  where?: Admin_elasticsearch_index_taskWhereInput | undefined;
}
