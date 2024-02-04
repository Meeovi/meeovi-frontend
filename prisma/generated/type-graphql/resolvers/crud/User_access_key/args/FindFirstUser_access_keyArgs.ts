import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_access_keyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/User_access_keyOrderByWithRelationAndSearchRelevanceInput";
import { User_access_keyWhereInput } from "../../../inputs/User_access_keyWhereInput";
import { User_access_keyWhereUniqueInput } from "../../../inputs/User_access_keyWhereUniqueInput";
import { User_access_keyScalarFieldEnum } from "../../../../enums/User_access_keyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUser_access_keyArgs {
  @TypeGraphQL.Field(_type => User_access_keyWhereInput, {
    nullable: true
  })
  where?: User_access_keyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_access_keyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: User_access_keyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => User_access_keyWhereUniqueInput, {
    nullable: true
  })
  cursor?: User_access_keyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [User_access_keyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "write_access" | "access_key" | "secret_access_key" | "last_usage_at" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
