import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_job_messageOrderByRelevanceFieldEnum } from "../../enums/Od_scheduler_job_messageOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_job_messageOrderByRelevanceInput", {})
export class Od_scheduler_job_messageOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_job_messageOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"type" | "message">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
