import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput";
import { Directus_dashboardsWhereInput } from "../../../inputs/Directus_dashboardsWhereInput";
import { Directus_dashboardsWhereUniqueInput } from "../../../inputs/Directus_dashboardsWhereUniqueInput";
import { Directus_dashboardsScalarFieldEnum } from "../../../../enums/Directus_dashboardsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDirectus_dashboardsArgs {
  @TypeGraphQL.Field(_type => Directus_dashboardsWhereInput, {
    nullable: true
  })
  where?: Directus_dashboardsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_dashboardsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_dashboardsWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_dashboardsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_dashboardsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "icon" | "note" | "date_created" | "user_created" | "color"> | undefined;
}
