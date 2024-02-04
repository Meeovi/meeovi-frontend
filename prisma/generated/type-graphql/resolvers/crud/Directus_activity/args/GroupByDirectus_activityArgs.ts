import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityOrderByWithAggregationInput } from "../../../inputs/Directus_activityOrderByWithAggregationInput";
import { Directus_activityScalarWhereWithAggregatesInput } from "../../../inputs/Directus_activityScalarWhereWithAggregatesInput";
import { Directus_activityWhereInput } from "../../../inputs/Directus_activityWhereInput";
import { Directus_activityScalarFieldEnum } from "../../../../enums/Directus_activityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityWhereInput, {
    nullable: true
  })
  where?: Directus_activityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_activityOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_activityOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_activityScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "action" | "user" | "timestamp" | "ip" | "user_agent" | "collection" | "item" | "comment" | "origin">;

  @TypeGraphQL.Field(_type => Directus_activityScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_activityScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
