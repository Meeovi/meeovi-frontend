import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyOrderByWithAggregationInput } from "../../../inputs/User_access_keyOrderByWithAggregationInput";
import { User_access_keyScalarWhereWithAggregatesInput } from "../../../inputs/User_access_keyScalarWhereWithAggregatesInput";
import { User_access_keyWhereInput } from "../../../inputs/User_access_keyWhereInput";
import { User_access_keyScalarFieldEnum } from "../../../../enums/User_access_keyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyWhereInput, {
    nullable: true
  })
  where?: User_access_keyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_access_keyOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: User_access_keyOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [User_access_keyScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "write_access" | "access_key" | "secret_access_key" | "last_usage_at" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => User_access_keyScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: User_access_keyScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
