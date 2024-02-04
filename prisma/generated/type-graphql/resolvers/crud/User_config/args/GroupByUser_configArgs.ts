import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configOrderByWithAggregationInput } from "../../../inputs/User_configOrderByWithAggregationInput";
import { User_configScalarWhereWithAggregatesInput } from "../../../inputs/User_configScalarWhereWithAggregatesInput";
import { User_configWhereInput } from "../../../inputs/User_configWhereInput";
import { User_configScalarFieldEnum } from "../../../../enums/User_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUser_configArgs {
  @TypeGraphQL.Field(_type => User_configWhereInput, {
    nullable: true
  })
  where?: User_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_configOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: User_configOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_configScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "key" | "value" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => User_configScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: User_configScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
