import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Admin_elasticsearch_index_taskCreateManyInput } from "../../../inputs/Admin_elasticsearch_index_taskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAdmin_elasticsearch_index_taskArgs {
  @TypeGraphQL.Field(_type => [Admin_elasticsearch_index_taskCreateManyInput], {
    nullable: false
  })
  data!: Admin_elasticsearch_index_taskCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
