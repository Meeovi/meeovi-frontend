import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Version_commit_dataOrderByWithRelationAndSearchRelevanceInput";
import { Version_commit_dataWhereInput } from "../../../inputs/Version_commit_dataWhereInput";
import { Version_commit_dataWhereUniqueInput } from "../../../inputs/Version_commit_dataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateVersion_commit_dataArgs {
  @TypeGraphQL.Field(_type => Version_commit_dataWhereInput, {
    nullable: true
  })
  where?: Version_commit_dataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Version_commit_dataOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Version_commit_dataOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Version_commit_dataWhereUniqueInput, {
    nullable: true
  })
  cursor?: Version_commit_dataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
