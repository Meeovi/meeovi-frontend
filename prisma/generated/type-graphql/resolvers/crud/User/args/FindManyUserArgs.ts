import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
import { UserScalarFieldEnum } from "../../../../enums/UserScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyUserArgs {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UserOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: UserOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  cursor?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UserScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "username" | "password" | "first_name" | "last_name" | "title" | "email" | "active" | "admin" | "avatar_id" | "locale_id" | "store_token" | "last_updated_password_at" | "time_zone" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
