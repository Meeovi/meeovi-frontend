import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsOrderByWithAggregationInput } from "../../../inputs/Directus_dashboardsOrderByWithAggregationInput";
import { Directus_dashboardsScalarWhereWithAggregatesInput } from "../../../inputs/Directus_dashboardsScalarWhereWithAggregatesInput";
import { Directus_dashboardsWhereInput } from "../../../inputs/Directus_dashboardsWhereInput";
import { Directus_dashboardsScalarFieldEnum } from "../../../../enums/Directus_dashboardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  where?: Directus_dashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Directus_dashboardsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "icon" | "note" | "date_created" | "user_created" | "color">;

  @TypeGraphQL.Field(_type => Directus_dashboardsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Directus_dashboardsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
