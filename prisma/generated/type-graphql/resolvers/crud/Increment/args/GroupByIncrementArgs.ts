import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementOrderByWithAggregationInput } from "../../../inputs/IncrementOrderByWithAggregationInput";
import { IncrementScalarWhereWithAggregatesInput } from "../../../inputs/IncrementScalarWhereWithAggregatesInput";
import { IncrementWhereInput } from "../../../inputs/IncrementWhereInput";
import { IncrementScalarFieldEnum } from "../../../../enums/IncrementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIncrementArgs {
  @TypeGraphQL.Field(_type => IncrementWhereInput, {
    nullable: true
  })
  where?: IncrementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncrementOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IncrementOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncrementScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"pool" | "cluster" | "key" | "count" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => IncrementScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IncrementScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
