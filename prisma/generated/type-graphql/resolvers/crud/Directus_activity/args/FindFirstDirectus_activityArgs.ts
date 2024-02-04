import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_activityOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_activityOrderByWithRelationAndSearchRelevanceInput";
import { Directus_activityWhereInput } from "../../../inputs/Directus_activityWhereInput";
import { Directus_activityWhereUniqueInput } from "../../../inputs/Directus_activityWhereUniqueInput";
import { Directus_activityScalarFieldEnum } from "../../../../enums/Directus_activityScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstDirectus_activityArgs {
  @TypeGraphQL.Field(_type => Directus_activityWhereInput, {
    nullable: true
  })
  where?: Directus_activityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_activityOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_activityOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_activityWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_activityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_activityScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "action" | "user" | "timestamp" | "ip" | "user_agent" | "collection" | "item" | "comment" | "origin"> | undefined;
}
