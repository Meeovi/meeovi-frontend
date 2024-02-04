import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput";
import { Od_scheduler_jobWhereInput } from "../../../inputs/Od_scheduler_jobWhereInput";
import { Od_scheduler_jobWhereUniqueInput } from "../../../inputs/Od_scheduler_jobWhereUniqueInput";
import { Od_scheduler_jobScalarFieldEnum } from "../../../../enums/Od_scheduler_jobScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Od_scheduler_jobOther_od_scheduler_jobArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_jobWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Od_scheduler_jobOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_jobWhereUniqueInput, {
    nullable: true
  })
  cursor?: Od_scheduler_jobWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_jobScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "parent_id" | "status" | "type" | "name" | "message" | "started_at" | "finished_at" | "created_at" | "updated_at"> | undefined;
}
