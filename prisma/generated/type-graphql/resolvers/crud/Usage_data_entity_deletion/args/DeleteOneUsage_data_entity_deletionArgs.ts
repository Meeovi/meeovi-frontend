import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionWhereUniqueInput } from "../../../inputs/Usage_data_entity_deletionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereUniqueInput, {
    nullable: false
  })
  where!: Usage_data_entity_deletionWhereUniqueInput;
}
