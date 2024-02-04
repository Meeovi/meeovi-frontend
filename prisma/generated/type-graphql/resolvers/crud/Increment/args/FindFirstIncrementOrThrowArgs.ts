import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncrementOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/IncrementOrderByWithRelationAndSearchRelevanceInput";
import { IncrementWhereInput } from "../../../inputs/IncrementWhereInput";
import { IncrementWhereUniqueInput } from "../../../inputs/IncrementWhereUniqueInput";
import { IncrementScalarFieldEnum } from "../../../../enums/IncrementScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIncrementOrThrowArgs {
  @TypeGraphQL.Field(_type => IncrementWhereInput, {
    nullable: true
  })
  where?: IncrementWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncrementOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: IncrementOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => IncrementWhereUniqueInput, {
    nullable: true
  })
  cursor?: IncrementWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IncrementScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"pool" | "cluster" | "key" | "count" | "created_at" | "updated_at"> | undefined;
}
