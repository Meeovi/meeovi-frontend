import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_eventOrderByRelevanceFieldEnum } from "../../enums/Klaviyo_job_eventOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_job_eventOrderByRelevanceInput", {})
export class Klaviyo_job_eventOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_eventOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "type"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
