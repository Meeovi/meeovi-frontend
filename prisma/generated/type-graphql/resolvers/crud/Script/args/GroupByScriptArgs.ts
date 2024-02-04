import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptOrderByWithAggregationInput } from "../../../inputs/ScriptOrderByWithAggregationInput";
import { ScriptScalarWhereWithAggregatesInput } from "../../../inputs/ScriptScalarWhereWithAggregatesInput";
import { ScriptWhereInput } from "../../../inputs/ScriptWhereInput";
import { ScriptScalarFieldEnum } from "../../../../enums/ScriptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByScriptArgs {
  @TypeGraphQL.Field(_type => ScriptWhereInput, {
    nullable: true
  })
  where?: ScriptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScriptOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ScriptOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ScriptScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "script" | "hook" | "name" | "active" | "app_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => ScriptScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ScriptScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
