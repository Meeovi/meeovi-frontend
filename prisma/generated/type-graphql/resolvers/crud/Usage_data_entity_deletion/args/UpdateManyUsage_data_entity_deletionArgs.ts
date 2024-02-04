import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionUpdateManyMutationInput } from "../../../inputs/Usage_data_entity_deletionUpdateManyMutationInput";
import { Usage_data_entity_deletionWhereInput } from "../../../inputs/Usage_data_entity_deletionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionUpdateManyMutationInput, {
    nullable: false
  })
  data!: Usage_data_entity_deletionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereInput, {
    nullable: true
  })
  where?: Usage_data_entity_deletionWhereInput | undefined;
}
