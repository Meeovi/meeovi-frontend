import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionCreateInput } from "../../../inputs/Usage_data_entity_deletionCreateInput";
import { Usage_data_entity_deletionUpdateInput } from "../../../inputs/Usage_data_entity_deletionUpdateInput";
import { Usage_data_entity_deletionWhereUniqueInput } from "../../../inputs/Usage_data_entity_deletionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereUniqueInput, {
    nullable: false
  })
  where!: Usage_data_entity_deletionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Usage_data_entity_deletionCreateInput, {
    nullable: false
  })
  create!: Usage_data_entity_deletionCreateInput;

  @TypeGraphQL.Field(_type => Usage_data_entity_deletionUpdateInput, {
    nullable: false
  })
  update!: Usage_data_entity_deletionUpdateInput;
}
