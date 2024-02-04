import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_tagOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Category_tagOrderByWithRelationAndSearchRelevanceInput";
import { Category_tagWhereInput } from "../../../inputs/Category_tagWhereInput";
import { Category_tagWhereUniqueInput } from "../../../inputs/Category_tagWhereUniqueInput";
import { Category_tagScalarFieldEnum } from "../../../../enums/Category_tagScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCategory_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Category_tagWhereInput, {
    nullable: true
  })
  where?: Category_tagWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Category_tagOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Category_tagOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_tagWhereUniqueInput, {
    nullable: true
  })
  cursor?: Category_tagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Category_tagScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"category_id" | "category_version_id" | "tag_id"> | undefined;
}
