import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_flow_action_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_flow_action_translationOrderByWithRelationAndSearchRelevanceInput";
import { App_flow_action_translationWhereInput } from "../../../inputs/App_flow_action_translationWhereInput";
import { App_flow_action_translationWhereUniqueInput } from "../../../inputs/App_flow_action_translationWhereUniqueInput";
import { App_flow_action_translationScalarFieldEnum } from "../../../../enums/App_flow_action_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApp_flow_action_translationArgs {
  @TypeGraphQL.Field(_type => App_flow_action_translationWhereInput, {
    nullable: true
  })
  where?: App_flow_action_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_flow_action_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_flow_action_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_flow_action_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_flow_action_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"app_flow_action_id" | "language_id" | "label" | "description" | "headline" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
