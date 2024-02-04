import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { System_configOrderByWithAggregationInput } from "../../../inputs/System_configOrderByWithAggregationInput";
import { System_configScalarWhereWithAggregatesInput } from "../../../inputs/System_configScalarWhereWithAggregatesInput";
import { System_configWhereInput } from "../../../inputs/System_configWhereInput";
import { System_configScalarFieldEnum } from "../../../../enums/System_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySystem_configArgs {
  @TypeGraphQL.Field(_type => System_configWhereInput, {
    nullable: true
  })
  where?: System_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [System_configOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: System_configOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [System_configScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "configuration_key" | "configuration_value" | "sales_channel_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => System_configScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: System_configScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
