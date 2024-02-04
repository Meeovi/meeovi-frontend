import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataOrderByWithAggregationInput } from "../../../inputs/Version_commit_dataOrderByWithAggregationInput";
import { Version_commit_dataScalarWhereWithAggregatesInput } from "../../../inputs/Version_commit_dataScalarWhereWithAggregatesInput";
import { Version_commit_dataWhereInput } from "../../../inputs/Version_commit_dataWhereInput";
import { Version_commit_dataScalarFieldEnum } from "../../../../enums/Version_commit_dataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByVersion_commit_dataArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataWhereInput, {
    nullable: true
  })
  where?: Version_commit_dataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Version_commit_dataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Version_commit_dataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Version_commit_dataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "auto_increment" | "version_commit_id" | "entity_name" | "entity_id" | "action" | "payload" | "user_id" | "integration_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Version_commit_dataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Version_commit_dataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
