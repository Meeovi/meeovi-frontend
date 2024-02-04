import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_script_condition_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_script_condition_translationOrderByWithRelationAndSearchRelevanceInput";
import { App_script_condition_translationWhereInput } from "../../../inputs/App_script_condition_translationWhereInput";
import { App_script_condition_translationWhereUniqueInput } from "../../../inputs/App_script_condition_translationWhereUniqueInput";
import { App_script_condition_translationScalarFieldEnum } from "../../../../enums/App_script_condition_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_script_condition_translationArgs {
  @TypeGraphQL.Field(_type => App_script_condition_translationWhereInput, {
    nullable: true
  })
  where?: App_script_condition_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_script_condition_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_script_condition_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_script_condition_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_script_condition_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"app_script_condition_id" | "language_id" | "name" | "created_at" | "updated_at"> | undefined;
}
