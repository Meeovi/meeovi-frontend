import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VersionsOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/VersionsOrderByWithRelationAndSearchRelevanceInput";
import { VersionsWhereInput } from "../../../inputs/VersionsWhereInput";
import { VersionsWhereUniqueInput } from "../../../inputs/VersionsWhereUniqueInput";
import { VersionsScalarFieldEnum } from "../../../../enums/VersionsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVersionsArgs {
  @TypeGraphQL.Field(_type => VersionsWhereInput, {
    nullable: true
  })
  where?: VersionsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [VersionsOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: VersionsOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => VersionsWhereUniqueInput, {
    nullable: true
  })
  cursor?: VersionsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [VersionsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"version" | "name" | "md5" | "run_at"> | undefined;
}
