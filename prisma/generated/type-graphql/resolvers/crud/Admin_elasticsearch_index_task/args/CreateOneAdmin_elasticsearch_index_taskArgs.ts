import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskCreateInput } from "../../../inputs/Admin_elasticsearch_index_taskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAdmin_elasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => Admin_elasticsearch_index_taskCreateInput, {
    nullable: false
  })
  data!: Admin_elasticsearch_index_taskCreateInput;
}
