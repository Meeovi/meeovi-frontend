import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Usage_data_entity_deletionOrderByWithRelationAndSearchRelevanceInput";
import { Usage_data_entity_deletionWhereInput } from "../../../inputs/Usage_data_entity_deletionWhereInput";
import { Usage_data_entity_deletionWhereUniqueInput } from "../../../inputs/Usage_data_entity_deletionWhereUniqueInput";
import { Usage_data_entity_deletionScalarFieldEnum } from "../../../../enums/Usage_data_entity_deletionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereInput, {
    nullable: true
  })
  where?: Usage_data_entity_deletionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Usage_data_entity_deletionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Usage_data_entity_deletionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereUniqueInput, {
    nullable: true
  })
  cursor?: Usage_data_entity_deletionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Usage_data_entity_deletionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "entity_ids" | "entity_name" | "deleted_at"> | undefined;
}
