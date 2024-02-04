import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Landing_pageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Landing_pageOrderByWithRelationAndSearchRelevanceInput";
import { Landing_pageWhereInput } from "../../../inputs/Landing_pageWhereInput";
import { Landing_pageWhereUniqueInput } from "../../../inputs/Landing_pageWhereUniqueInput";
import { Landing_pageScalarFieldEnum } from "../../../../enums/Landing_pageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstLanding_pageArgs {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Landing_pageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Landing_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Landing_pageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "active" | "cms_page_id" | "cms_page_version_id" | "created_at" | "updated_at"> | undefined;
}
