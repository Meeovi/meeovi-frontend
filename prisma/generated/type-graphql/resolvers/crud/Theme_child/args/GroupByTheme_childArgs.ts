import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childOrderByWithAggregationInput } from "../../../inputs/Theme_childOrderByWithAggregationInput";
import { Theme_childScalarWhereWithAggregatesInput } from "../../../inputs/Theme_childScalarWhereWithAggregatesInput";
import { Theme_childWhereInput } from "../../../inputs/Theme_childWhereInput";
import { Theme_childScalarFieldEnum } from "../../../../enums/Theme_childScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTheme_childArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereInput, {
    nullable: true
  })
  where?: Theme_childWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_childOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Theme_childOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Theme_childScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"parent_id" | "child_id">;

  @TypeGraphQL.Field(_type => Theme_childScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Theme_childScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
