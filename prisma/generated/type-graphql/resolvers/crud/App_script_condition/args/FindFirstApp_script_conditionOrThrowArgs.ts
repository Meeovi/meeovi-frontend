import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_conditionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_script_conditionOrderByWithRelationAndSearchRelevanceInput";
import { App_script_conditionWhereInput } from "../../../inputs/App_script_conditionWhereInput";
import { App_script_conditionWhereUniqueInput } from "../../../inputs/App_script_conditionWhereUniqueInput";
import { App_script_conditionScalarFieldEnum } from "../../../../enums/App_script_conditionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_script_conditionOrThrowArgs {
  @TypeGraphQL.Field(_type => App_script_conditionWhereInput, {
    nullable: true
  })
  where?: App_script_conditionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_script_conditionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_conditionWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_script_conditionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_script_conditionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "app_id" | "identifier" | "active" | "group" | "script" | "constraints" | "config" | "created_at" | "updated_at"> | undefined;
}
