import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { User_recoveryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/User_recoveryOrderByWithRelationAndSearchRelevanceInput";
import { User_recoveryWhereInput } from "../../../inputs/User_recoveryWhereInput";
import { User_recoveryWhereUniqueInput } from "../../../inputs/User_recoveryWhereUniqueInput";
import { User_recoveryScalarFieldEnum } from "../../../../enums/User_recoveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUser_recoveryOrThrowArgs {
  @TypeGraphQL.Field(_type => User_recoveryWhereInput, {
    nullable: true
  })
  where?: User_recoveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [User_recoveryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: User_recoveryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => User_recoveryWhereUniqueInput, {
    nullable: true
  })
  cursor?: User_recoveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [User_recoveryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "hash" | "created_at" | "updated_at"> | undefined;
}
