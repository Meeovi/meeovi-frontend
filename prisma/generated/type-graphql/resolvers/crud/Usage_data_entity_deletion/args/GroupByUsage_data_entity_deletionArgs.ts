import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Usage_data_entity_deletionOrderByWithAggregationInput } from "../../../inputs/Usage_data_entity_deletionOrderByWithAggregationInput";
import { Usage_data_entity_deletionScalarWhereWithAggregatesInput } from "../../../inputs/Usage_data_entity_deletionScalarWhereWithAggregatesInput";
import { Usage_data_entity_deletionWhereInput } from "../../../inputs/Usage_data_entity_deletionWhereInput";
import { Usage_data_entity_deletionScalarFieldEnum } from "../../../../enums/Usage_data_entity_deletionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUsage_data_entity_deletionArgs {
  @TypeGraphQL.Field(_type => Usage_data_entity_deletionWhereInput, {
    nullable: true
  })
  where?: Usage_data_entity_deletionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Usage_data_entity_deletionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Usage_data_entity_deletionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Usage_data_entity_deletionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "entity_ids" | "entity_name" | "deleted_at">;

  @TypeGraphQL.Field(_type => Usage_data_entity_deletionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Usage_data_entity_deletionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
