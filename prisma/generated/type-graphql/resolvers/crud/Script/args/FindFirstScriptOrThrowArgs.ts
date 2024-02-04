import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ScriptOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ScriptOrderByWithRelationAndSearchRelevanceInput";
import { ScriptWhereInput } from "../../../inputs/ScriptWhereInput";
import { ScriptWhereUniqueInput } from "../../../inputs/ScriptWhereUniqueInput";
import { ScriptScalarFieldEnum } from "../../../../enums/ScriptScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstScriptOrThrowArgs {
  @TypeGraphQL.Field(_type => ScriptWhereInput, {
    nullable: true
  })
  where?: ScriptWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ScriptOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ScriptOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ScriptWhereUniqueInput, {
    nullable: true
  })
  cursor?: ScriptWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ScriptScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "script" | "hook" | "name" | "active" | "app_id" | "created_at" | "updated_at"> | undefined;
}
