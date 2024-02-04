import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByUserArgs {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "username" | "password" | "first_name" | "last_name" | "title" | "email" | "active" | "admin" | "avatar_id" | "locale_id" | "store_token" | "last_updated_password_at" | "time_zone" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => UserScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: UserScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
