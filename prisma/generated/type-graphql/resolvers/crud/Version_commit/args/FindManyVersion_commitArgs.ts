import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commitOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Version_commitOrderByWithRelationAndSearchRelevanceInput";
import { Version_commitWhereInput } from "../../../inputs/Version_commitWhereInput";
import { Version_commitWhereUniqueInput } from "../../../inputs/Version_commitWhereUniqueInput";
import { Version_commitScalarFieldEnum } from "../../../../enums/Version_commitScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyVersion_commitArgs {
  @TypeGraphQL.Field(_type => Version_commitWhereInput, {
    nullable: true
  })
  where?: Version_commitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Version_commitOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Version_commitOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Version_commitWhereUniqueInput, {
    nullable: true
  })
  cursor?: Version_commitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Version_commitScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "auto_increment" | "is_merge" | "message" | "user_id" | "integration_id" | "version_id" | "created_at" | "updated_at"> | undefined;
}
