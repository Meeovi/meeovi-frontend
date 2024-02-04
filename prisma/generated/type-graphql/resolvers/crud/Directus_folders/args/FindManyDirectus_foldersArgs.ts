import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_foldersOrderByWithRelationAndSearchRelevanceInput";
import { Directus_foldersWhereInput } from "../../../inputs/Directus_foldersWhereInput";
import { Directus_foldersWhereUniqueInput } from "../../../inputs/Directus_foldersWhereUniqueInput";
import { Directus_foldersScalarFieldEnum } from "../../../../enums/Directus_foldersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_foldersOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_foldersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "parent"> | undefined;
}
