import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Version_commit_dataOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Version_commit_dataOrderByWithRelationAndSearchRelevanceInput";
import { Version_commit_dataWhereInput } from "../../../inputs/Version_commit_dataWhereInput";
import { Version_commit_dataWhereUniqueInput } from "../../../inputs/Version_commit_dataWhereUniqueInput";
import { Version_commit_dataScalarFieldEnum } from "../../../../enums/Version_commit_dataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Version_commitVersion_commit_dataArgs {
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

  @TypeGraphQL.Field(_type => [Version_commit_dataScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "auto_increment" | "version_commit_id" | "entity_name" | "entity_id" | "action" | "payload" | "user_id" | "integration_id" | "created_at" | "updated_at"> | undefined;
}
