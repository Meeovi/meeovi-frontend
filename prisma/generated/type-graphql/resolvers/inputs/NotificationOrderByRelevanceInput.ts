import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationOrderByRelevanceFieldEnum } from "../../enums/NotificationOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("NotificationOrderByRelevanceInput", {})
export class NotificationOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [NotificationOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"status" | "message" | "required_privileges">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
