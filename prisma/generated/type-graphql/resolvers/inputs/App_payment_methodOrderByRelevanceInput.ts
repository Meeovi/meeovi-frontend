import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodOrderByRelevanceFieldEnum } from "../../enums/App_payment_methodOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_payment_methodOrderByRelevanceInput", {})
export class App_payment_methodOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [App_payment_methodOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"app_name" | "identifier" | "pay_url" | "finalize_url" | "validate_url" | "capture_url" | "refund_url" | "recurring_url">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
