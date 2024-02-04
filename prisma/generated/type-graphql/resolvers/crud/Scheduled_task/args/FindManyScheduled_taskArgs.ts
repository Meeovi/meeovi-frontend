import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Scheduled_taskOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Scheduled_taskOrderByWithRelationAndSearchRelevanceInput";
import { Scheduled_taskWhereInput } from "../../../inputs/Scheduled_taskWhereInput";
import { Scheduled_taskWhereUniqueInput } from "../../../inputs/Scheduled_taskWhereUniqueInput";
import { Scheduled_taskScalarFieldEnum } from "../../../../enums/Scheduled_taskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyScheduled_taskArgs {
  @TypeGraphQL.Field(_type => Scheduled_taskWhereInput, {
    nullable: true
  })
  where?: Scheduled_taskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Scheduled_taskOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Scheduled_taskOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Scheduled_taskWhereUniqueInput, {
    nullable: true
  })
  cursor?: Scheduled_taskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Scheduled_taskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "scheduled_task_class" | "run_interval" | "default_run_interval" | "status" | "last_execution_time" | "next_execution_time" | "created_at" | "updated_at"> | undefined;
}
