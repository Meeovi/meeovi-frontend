import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Refresh_tokenOrderByWithAggregationInput } from "../../../inputs/Refresh_tokenOrderByWithAggregationInput";
import { Refresh_tokenScalarWhereWithAggregatesInput } from "../../../inputs/Refresh_tokenScalarWhereWithAggregatesInput";
import { Refresh_tokenWhereInput } from "../../../inputs/Refresh_tokenWhereInput";
import { Refresh_tokenScalarFieldEnum } from "../../../../enums/Refresh_tokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRefresh_tokenArgs {
  @TypeGraphQL.Field(_type => Refresh_tokenWhereInput, {
    nullable: true
  })
  where?: Refresh_tokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Refresh_tokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Refresh_tokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Refresh_tokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "user_id" | "token_id" | "issued_at" | "expires_at">;

  @TypeGraphQL.Field(_type => Refresh_tokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Refresh_tokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
