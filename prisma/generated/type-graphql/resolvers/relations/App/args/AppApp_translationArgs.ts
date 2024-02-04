import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_translationOrderByWithRelationAndSearchRelevanceInput";
import { App_translationWhereInput } from "../../../inputs/App_translationWhereInput";
import { App_translationWhereUniqueInput } from "../../../inputs/App_translationWhereUniqueInput";
import { App_translationScalarFieldEnum } from "../../../../enums/App_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class AppApp_translationArgs {
  @TypeGraphQL.Field(_type => App_translationWhereInput, {
    nullable: true
  })
  where?: App_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"app_id" | "language_id" | "label" | "description" | "privacy_policy_extensions" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
