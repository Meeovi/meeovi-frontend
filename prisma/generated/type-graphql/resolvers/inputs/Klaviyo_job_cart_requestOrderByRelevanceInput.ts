import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_job_cart_requestOrderByRelevanceFieldEnum } from "../../enums/Klaviyo_job_cart_requestOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_job_cart_requestOrderByRelevanceInput", {})
export class Klaviyo_job_cart_requestOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Klaviyo_job_cart_requestOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "serialized_request"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
