import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { App_templateOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/App_templateOrderByWithRelationAndSearchRelevanceInput";
import { App_templateWhereInput } from "../../../inputs/App_templateWhereInput";
import { App_templateWhereUniqueInput } from "../../../inputs/App_templateWhereUniqueInput";
import { App_templateScalarFieldEnum } from "../../../../enums/App_templateScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstApp_templateOrThrowArgs {
  @TypeGraphQL.Field(_type => App_templateWhereInput, {
    nullable: true
  })
  where?: App_templateWhereInput | undefined;

  @TypeGraphQL.Field(_type => [App_templateOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: App_templateOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => App_templateWhereUniqueInput, {
    nullable: true
  })
  cursor?: App_templateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [App_templateScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "template" | "path" | "active" | "app_id" | "created_at" | "updated_at"> | undefined;
}
