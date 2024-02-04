import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Od_scheduler_jobOrderByRelevanceFieldEnum } from "../../enums/Od_scheduler_jobOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Od_scheduler_jobOrderByRelevanceInput", {})
export class Od_scheduler_jobOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Od_scheduler_jobOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"status" | "type" | "name" | "message">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
