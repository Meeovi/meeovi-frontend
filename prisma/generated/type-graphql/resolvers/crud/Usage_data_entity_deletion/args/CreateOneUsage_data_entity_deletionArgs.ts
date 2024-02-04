import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionCreateInput } from "../../../inputs/Usage_data_entity_deletionCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionCreateInput, {
    nullable: false
  })
  data!: Usage_data_entity_deletionCreateInput;
}
