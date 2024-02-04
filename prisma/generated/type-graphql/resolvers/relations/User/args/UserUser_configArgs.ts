import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_configOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/User_configOrderByWithRelationAndSearchRelevanceInput";
import { User_configWhereInput } from "../../../inputs/User_configWhereInput";
import { User_configWhereUniqueInput } from "../../../inputs/User_configWhereUniqueInput";
import { User_configScalarFieldEnum } from "../../../../enums/User_configScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserUser_configArgs {
  @TypeGraphQL.Field(_type => User_configWhereInput, {
    nullable: true
  })
  where?: User_configWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_configOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: User_configOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => User_configWhereUniqueInput, {
    nullable: true
  })
  cursor?: User_configWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [User_configScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "key" | "value" | "created_at" | "updated_at"> | undefined;
}
