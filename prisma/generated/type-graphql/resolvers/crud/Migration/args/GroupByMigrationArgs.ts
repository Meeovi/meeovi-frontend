import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MigrationOrderByWithAggregationInput } from "../../../inputs/MigrationOrderByWithAggregationInput";
import { MigrationScalarWhereWithAggregatesInput } from "../../../inputs/MigrationScalarWhereWithAggregatesInput";
import { MigrationWhereInput } from "../../../inputs/MigrationWhereInput";
import { MigrationScalarFieldEnum } from "../../../../enums/MigrationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMigrationArgs {
  @TypeGraphQL.Field(_type => MigrationWhereInput, {
    nullable: true
  })
  where?: MigrationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MigrationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MigrationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [MigrationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"class" | "creation_timestamp" | "update" | "update_destructive" | "message">;

  @TypeGraphQL.Field(_type => MigrationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MigrationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
