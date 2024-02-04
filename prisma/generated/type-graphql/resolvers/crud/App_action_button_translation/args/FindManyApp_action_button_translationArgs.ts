import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_action_button_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_action_button_translationOrderByWithRelationAndSearchRelevanceInput";
import { App_action_button_translationWhereInput } from "../../../inputs/App_action_button_translationWhereInput";
import { App_action_button_translationWhereUniqueInput } from "../../../inputs/App_action_button_translationWhereUniqueInput";
import { App_action_button_translationScalarFieldEnum } from "../../../../enums/App_action_button_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyApp_action_button_translationArgs {
  @TypeGraphQL.Field(_type => App_action_button_translationWhereInput, {
    nullable: true
  })
  where?: App_action_button_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_action_button_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_action_button_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_action_button_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_action_button_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"label" | "created_at" | "updated_at" | "app_action_button_id" | "language_id"> | undefined;
}
