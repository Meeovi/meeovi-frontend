import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryOrderByWithAggregationInput } from "../../../inputs/User_recoveryOrderByWithAggregationInput";
import { User_recoveryScalarWhereWithAggregatesInput } from "../../../inputs/User_recoveryScalarWhereWithAggregatesInput";
import { User_recoveryWhereInput } from "../../../inputs/User_recoveryWhereInput";
import { User_recoveryScalarFieldEnum } from "../../../../enums/User_recoveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUser_recoveryArgs {
  @TypeGraphQL.Field(_type => User_recoveryWhereInput, {
    nullable: true
  })
  where?: User_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_recoveryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: User_recoveryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_recoveryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "hash" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => User_recoveryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: User_recoveryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
