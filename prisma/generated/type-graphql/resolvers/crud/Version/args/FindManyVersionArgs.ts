import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VersionOrderByWithRelationAndSearchRelevanceInput";
import { VersionWhereInput } from "../../../inputs/VersionWhereInput";
import { VersionWhereUniqueInput } from "../../../inputs/VersionWhereUniqueInput";
import { VersionScalarFieldEnum } from "../../../../enums/VersionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVersionArgs {
  @TypeGraphQL.Field(_type => VersionWhereInput, {
    nullable: true
  })
  where?: VersionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: VersionOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "created_at" | "updated_at"> | undefined;
}
