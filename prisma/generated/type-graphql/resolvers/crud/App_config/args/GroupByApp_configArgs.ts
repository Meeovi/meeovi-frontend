import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_configOrderByWithAggregationInput } from "../../../inputs/App_configOrderByWithAggregationInput";
import { App_configScalarWhereWithAggregatesInput } from "../../../inputs/App_configScalarWhereWithAggregatesInput";
import { App_configWhereInput } from "../../../inputs/App_configWhereInput";
import { App_configScalarFieldEnum } from "../../../../enums/App_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByApp_configArgs {
  @TypeGraphQL.Field(_type => App_configWhereInput, {
    nullable: true
  })
  where?: App_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_configOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: App_configOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_configScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"key" | "value">;

  @TypeGraphQL.Field(_type => App_configScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: App_configScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
