import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionWhereInput } from "../../../inputs/Usage_data_entity_deletionWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereInput, {
    nullable: true
  })
  where?: Usage_data_entity_deletionWhereInput | undefined;
}
