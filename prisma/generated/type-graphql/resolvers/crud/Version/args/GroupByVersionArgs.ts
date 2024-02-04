import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionOrderByWithAggregationInput } from "../../../inputs/VersionOrderByWithAggregationInput";
import { VersionScalarWhereWithAggregatesInput } from "../../../inputs/VersionScalarWhereWithAggregatesInput";
import { VersionWhereInput } from "../../../inputs/VersionWhereInput";
import { VersionScalarFieldEnum } from "../../../../enums/VersionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersionArgs {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VersionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => VersionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VersionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
