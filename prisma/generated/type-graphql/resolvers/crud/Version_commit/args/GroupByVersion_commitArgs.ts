import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitOrderByWithAggregationInput } from "../../../inputs/Version_commitOrderByWithAggregationInput";
import { Version_commitScalarWhereWithAggregatesInput } from "../../../inputs/Version_commitScalarWhereWithAggregatesInput";
import { Version_commitWhereInput } from "../../../inputs/Version_commitWhereInput";
import { Version_commitScalarFieldEnum } from "../../../../enums/Version_commitScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitWhereInput, {
    nullable: true
  })
  where?: Version_commitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Version_commitOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Version_commitOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Version_commitScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "auto_increment" | "is_merge" | "message" | "user_id" | "integration_id" | "version_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Version_commitScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Version_commitScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
