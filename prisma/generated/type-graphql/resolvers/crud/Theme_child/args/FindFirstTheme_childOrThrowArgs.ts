import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Theme_childOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Theme_childOrderByWithRelationAndSearchRelevanceInput";
import { Theme_childWhereInput } from "../../../inputs/Theme_childWhereInput";
import { Theme_childWhereUniqueInput } from "../../../inputs/Theme_childWhereUniqueInput";
import { Theme_childScalarFieldEnum } from "../../../../enums/Theme_childScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTheme_childOrThrowArgs {
  @TypeGraphQL.Field(_type => Theme_childWhereInput, {
    nullable: true
  })
  where?: Theme_childWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Theme_childOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Theme_childOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Theme_childWhereUniqueInput, {
    nullable: true
  })
  cursor?: Theme_childWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Theme_childScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"parent_id" | "child_id"> | undefined;
}
