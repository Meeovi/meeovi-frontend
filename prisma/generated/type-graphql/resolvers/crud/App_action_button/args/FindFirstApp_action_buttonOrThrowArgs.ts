import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_buttonOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_action_buttonOrderByWithRelationAndSearchRelevanceInput";
import { App_action_buttonWhereInput } from "../../../inputs/App_action_buttonWhereInput";
import { App_action_buttonWhereUniqueInput } from "../../../inputs/App_action_buttonWhereUniqueInput";
import { App_action_buttonScalarFieldEnum } from "../../../../enums/App_action_buttonScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_action_buttonOrThrowArgs {
  @TypeGraphQL.Field(_type => App_action_buttonWhereInput, {
    nullable: true
  })
  where?: App_action_buttonWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_action_buttonOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_buttonWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_action_buttonWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_action_buttonScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "entity" | "view" | "url" | "action" | "open_new_tab" | "app_id" | "created_at" | "updated_at"> | undefined;
}
