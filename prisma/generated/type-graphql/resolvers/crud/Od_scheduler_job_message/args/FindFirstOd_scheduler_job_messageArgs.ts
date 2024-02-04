import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput";
import { Od_scheduler_job_messageWhereInput } from "../../../inputs/Od_scheduler_job_messageWhereInput";
import { Od_scheduler_job_messageWhereUniqueInput } from "../../../inputs/Od_scheduler_job_messageWhereUniqueInput";
import { Od_scheduler_job_messageScalarFieldEnum } from "../../../../enums/Od_scheduler_job_messageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOd_scheduler_job_messageArgs {
  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereInput, {
    nullable: true
  })
  where?: Od_scheduler_job_messageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Od_scheduler_job_messageOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Od_scheduler_job_messageWhereUniqueInput, {
    nullable: true
  })
  cursor?: Od_scheduler_job_messageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "job_id" | "type" | "message" | "created_at" | "updated_at"> | undefined;
}
