import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/MigrationOrderByWithRelationAndSearchRelevanceInput";
import { MigrationWhereInput } from "../../../inputs/MigrationWhereInput";
import { MigrationWhereUniqueInput } from "../../../inputs/MigrationWhereUniqueInput";
import { MigrationScalarFieldEnum } from "../../../../enums/MigrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationWhereInput, {
    nullable: true
  })
  where?: MigrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MigrationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: MigrationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => MigrationWhereUniqueInput, {
    nullable: true
  })
  cursor?: MigrationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MigrationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"class" | "creation_timestamp" | "update" | "update_destructive" | "message"> | undefined;
}
