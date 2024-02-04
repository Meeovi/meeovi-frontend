import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Refresh_tokenOrderByWithRelationAndSearchRelevanceInput";
import { Refresh_tokenWhereInput } from "../../../inputs/Refresh_tokenWhereInput";
import { Refresh_tokenWhereUniqueInput } from "../../../inputs/Refresh_tokenWhereUniqueInput";
import { Refresh_tokenScalarFieldEnum } from "../../../../enums/Refresh_tokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstRefresh_tokenOrThrowArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenWhereInput, {
    nullable: true
  })
  where?: Refresh_tokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Refresh_tokenOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Refresh_tokenOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Refresh_tokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: Refresh_tokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Refresh_tokenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "user_id" | "token_id" | "issued_at" | "expires_at"> | undefined;
}
